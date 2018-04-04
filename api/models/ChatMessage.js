/**
 * ChatMessage.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace Messages
 * @prop {model} ownerUser user-model
 * @prop {model} ownerMaster master-model
 * @prop {string} text message-text
 * @prop {string} pic pic-link
 * @prop {model} chat chat related to
 * @prop {boolean} status 
 */

const _ = require('lodash');

module.exports = {

  attributes: {
    ownerUser: { model: 'user', defaultsTo: null },
    ownerMaster: { model: 'master', defaultsTo: null },
    text: { type: 'text' },
    pic: { type: 'string' },
    chat: { model: 'chat', required: true },
    status: { type: 'boolean', defaultsTo: false },
  },
  fullFill: function (messageId) {
    let obj;
    return ChatMessage.findOne({ id: messageId }).populateAll().then(finded => {
      obj = finded.toObject();
      if (finded.ownerMaster != null) {
        return finded.ownerMaster.withUser();
      } else {
        return null;
      }
    }).then(ok => {
      if (ok != null) {
        obj.ownerMaster = ok;
      }
      return obj;
    })
  },
  /**
   * @param {object} data fullfilled message
   */
  fireSend: function (data) {
    /** 
     * 1. find Chat
     * 2. find receiver (!= ownerMessage)
     * 3. FireToken.bulkSend
     */
    if (data.ownerMaster || data.chat.manager == data.ownerUser.id) {
      /** message for user */
      var userId;
      if (data.chat.user) userId = data.chat.user;
      else userId = data.chat.master;
      return User.findOne({ id: userId }).populate('fireTokens')
        .then(userWithTokens => {
          if (userWithTokens.fireTokens && userWithTokens.fireTokens.length > 0) {
            return FireToken.bulkSend(data, _.map(userWithTokens.fireTokens, 'token'));
          }
        })
    } else {
      /** message for master */
      /** msg for manager */
      if (data.chat.manager) {
        return User.findOne({id : data.chat.manager}).populate('fireTokens')
          .then(userWithTokens => {
            return FireToken.bulkSend(data, _.map(userWithTokens.fireTokens, 'token'));
          })
      } else {
        var ios_tokens;
        var android_tokens;
        return Master.findOne({ id: data.chat.master })
          .then(master => {
            return User.findOne({ id: master.user }).populate('fireTokens');
          }).then(userWithTokens => {
            android_tokens = _.map(_.filter(userWithTokens.fireTokens, token => {
              return token.device.toLowerCase() == 'android device';
            }), 'token');
            ios_tokens = _.map(_.filter(userWithTokens.fireTokens, token => {
              return token.device.toLowerCase() == 'ios device';
            }), 'token');
            return FireToken.bulkSend(data, android_tokens);
          }).then(() => {
            return FireToken.bulkSendIOS(data, ios_tokens);
          })
      }

    }
  },
  afterCreate: function (data, cb) {
    /** fire send */
    ChatMessage.fullFill(data.id).then(filled => {
      data = filled;
      return ChatMessage.fireSend(filled);
    }).then(() => {
      cb();
    }).catch(err => {
      sails.log.debug('fire error', err);
      cb(err);
    })
  },
};

