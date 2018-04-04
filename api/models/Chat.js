/**
 * Chat.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace Chat
 * @prop {model} master master-id
 * @prop {model} user user-id
 * @prop {collection} messages messages models
 */

module.exports = {

  attributes: {
    master: { model: 'master', required: true },
    user: { model: 'user', required: true },
    messages: { collection: 'chatMessage', via: 'chat', dominant: true },
    manager: { model: 'user' }
  },
  beforeCreate: function (data, cb) {
    if (data && data.master && data.user) {
      Chat.findOne({ master: data.master, user: data.user }).then(finded => {
        if (finded) {
          cb('the same');
        } else {
          if (data.manager) {
            User.findOne({ id: data.manager }).then(finded => {
              if (!finded) return cb('no manager finded');
              if (!finded.isManager) return cb('user is not manager');
              return cb();
            })
          } else {
            return cb();
          }
        }
      }).catch(err => {
        cb(err);
      })
    } else {
      if (data.manager) {
        User.findOne({ id: data.manager }).then(finded => {
          if (!finded) return cb('no manager finded');
          if (!finded.isManager) return cb('user is not manager');
          return cb();
        })
      } else {
        cb();
      }
    }
  }
};

