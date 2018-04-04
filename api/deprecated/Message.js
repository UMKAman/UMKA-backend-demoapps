/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace Message (DEPRECATED)
 * @prop {model} user user
 * @prop {model} master master
 * @prop {string} message сообщение
 * @prop {blob/string} pic Картинка в сообщении
 * @prop {boolean} readedUser Прочинано пользователем
 * @prop {boolean} readedMaster Прочинано мастером
 */
module.exports = {

  attributes: {
    user: { model: 'user',required: true },
    master: { model: 'master',required: true },
    message: { type: 'string' },
    pic: { type: 'string' },
    readedUser: { type: 'boolean', defaultsTo: false },
    readedMaster: { type: 'boolean', defaultsTo: false },
  }
};

