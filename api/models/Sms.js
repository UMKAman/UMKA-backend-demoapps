/**
 * Sms.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace Sms
 * @prop {string} phone номер телефона
 * @prop {string} code отправленный код на СМС
 * 
 */
module.exports = {

  attributes: {
    phone: { type: 'string', unique: true },
    code: { type: 'string' },
  },
  /**
   * @method checkCode
   * @static
   * @param  {string} phone
   * @param  {string} code
   */
  checkCode: function (phone, code) {
    return Sms.findOne({ phone: phone }).then(finded => {
      if (finded) {
        if (finded.code === code) {
          return Sms.destroy({ phone: phone });
        } else {
          throw { code: 1 };
        }
      } else {
        throw { code: 2 };
      }
    })
  }
};

