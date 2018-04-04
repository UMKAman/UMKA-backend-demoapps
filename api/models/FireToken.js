/**
 * FireToken.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var admin = require("firebase-admin");

var serviceAccount = require("../../config/fcm/umka-firefile.json");
var _ = require('lodash');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: ""
});


/**
 * @namespace FireToken
 * @prop {string} token fire-token
 * @prop {model} user user-model
 * @prop {string} device device-description
 */
module.exports = {

  attributes: {
    token: { type: 'string' },
    user: { model: 'user' },
    device: { type: 'string' },
    /**
     * @method sendMessage
     * @memberof FireToken
     * @param {object} message message to send
     */
    sendMessage: function (message) {
      return new Promise((resolve, reject) => {
        if (typeof message !== 'object') {
          resolve();
        }

        var payload = {
          data: message,
        }

        var toRem = [];
        for (var key in message) {
          if (message[key] == null) {
            toRem.push(key);
          } else {
            message[key] = message[key].toString();
          }
        }

        _.each(toRem, key => {
          delete message[key];
        })

        admin.messaging().sendToDevice(this.token, payload)
          .then(data => {
            sails.log.info('fireOK: ', data);
            resolve();
          })
          .catch(err => {
            sails.log.info('fireFail: ', err);
            resolve();
          });
      })
    }
  },
  /**
   * @method bulkSendMessage
   * @memberof FireToken
   * @param {array} keys array of firekeys for send to
   * @param {object} message message to send
   */
  bulkSendMessage: function (keys, message) {
    return new Promise((resolve, reject) => {
      if (typeof message !== 'object') {
        resolve();
      }

      var payload = {
        data: message,
      }

      var toRem = [];
      for (var key in message) {
        if (message[key] == null) {
          toRem.push(key);
        } else {
          message[key] = message[key].toString();
        }
      }

      _.each(toRem, key => {
        delete message[key];
      })

      admin.messaging().sendToDevice(keys, payload)
        .then(() => {
          resolve();
        })
        .catch(err => {
          sails.log.info('fireFail: ', err);
          reject(err);
        });
    })
  },
  /**
   * @method bulkSend
   * @memberof FireToken
   * @param {object} message what to send
   * @param {array} tokens token send to
   * @return {promise} send by fire status
   * 
   */
  bulkSend: function (message, tokens) {
    if (typeof message !== 'object') {
      throw { message: 'fire message must be an object' };
    }
    sails.log.debug('token list ', tokens);
    if (tokens.length > 0) {
      return admin.messaging().sendToDevice(tokens, {
        data: {
          message: JSON.stringify(message),
        }
      })
    } else {
      return;
    }
  },
  bulkSendIOS: function (message, tokens) {
    if (typeof message !== 'object') {
      throw { message: 'fire message must be an object' };
    }
    sails.log.debug('token list ', tokens);
    if (tokens.length > 0) {
      var payload = {
        notification: {
          sound: 'default',
          title: message.ownerUser.name || 'New message',
          body: JSON.parse('"' + message.text + '"')
        },
        data: {
          pic: message.pic || 'null',
          status: message.status.toString(),
          createdAt: message.createdAt,
          chat: message.chat.id.toString()
        }
      };
      return admin.messaging().sendToDevice(tokens, payload);
    } else {
      return;
    }
  }
};

