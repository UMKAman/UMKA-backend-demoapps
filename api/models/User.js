/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace User
 * @prop {string} phone телефон
 * @prop {string} name имя
 * @prop {blob/string} avatar аватар
 * @prop {string} about о себе
 * @prop {boolean} isMaster мастер?
 * @prop {boolean} isAdmin админ
 * @prop {string} city Город
 * @prop {enum} gender Муж/Жен
 * @prop {collection} favorite список избранных мастеров
 * @prop {collection} orderHistory история заказов
 * @prop {collection} jwts список выданных токенов
 * @prop {boolean} pushNotify вкл/выкл push-уведомлений
 * 
 */

const bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    phone: { type: 'string', unique: true },
    name: { type: 'string' },
    avatar: { type: 'string' },
    isAdmin: { type: 'boolean', defaultsTo: false },
    isManager: { type: 'boolean', defaultsTo: false },
    about: { type: 'string' },
    isMaster: { type: 'boolean', defaultsTo: false },
    city: { type: 'string' },
    password: { type: 'string' },
    gender: { type: 'string', enum: ['Муж', 'Жен'] },
    // master: { model: 'master' },
    pushNotify: { type: 'boolean', defaultsTo: true },
    favorite: {
      collection: 'master',
      via: 'inFavorite',
      dominant: true
    },
    orderHistory: {
      collection: 'order',
      via: 'user'
    },
    jwts: {
      collection: 'jwt',
      via: 'user'
    },
    fireTokens: {
      collection: 'fireToken',
      via: 'user',
    },
    /**
     * @method generateNewSMS
     */
    generateNewSMS: function () {
      return Sms.create({ phone: this.phone, code: codegen(4) }).then(created => {
        return smsBeeline.send(this.phone, created.code);
      })
    },
    toJSON: function(){
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  /**
   * @method checkSMSCode
   * @param  {string} phone
   * @param  {string} code
   * @static 
   */
  checkSMSCode(phone, code) {
    return Sms.findOne({ phone: finded.phone })
      .then(finded => {
        if (finded.code === code) {
          return finded.destroy();
        } else {
          throw { code: 9 };
        }
      }).then(() => {
        return User.create({ phone: phone });
      })
  },
  beforeCreate: function (data, cb) {
    if (data && data.phone) {
      switch (data.phone) {
        case '+79138401916':
        case '+79539263080':
          data.isAdmin = true;
          break;
        default:
          break;
      }
    }
    if (data && data.password) {
      bcrypt.hash(data.password, 10).then(hash => {
        data.password = hash;
        cb();
      }).catch(err => {
        cb(err);
      })
    } else {
      cb();
    }
  },
  beforeUpdate: function(user, cb) {
    if (user.password) {
      bcrypt.hash(user.password, 10).then(hash => {
        user.password = hash;
        cb();
      }).catch(err => {
        cb(err);
      })
    } else {
      cb();
    }
  }
};

