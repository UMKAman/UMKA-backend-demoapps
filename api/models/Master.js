/**
 * Master.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace Master
 * @prop {model} user user model, uniq, required
 * @prop {string} minCost  минимальная стоимость услуги
 * @prop {string} lon  долгота
 * @prop {string} lat  широта
 * @prop {string} address  Адрес мастера
 * @prop {float} averageRating  средний рейтинг
 * @prop {integer} voices  количество оставивших оценку
 * @prop {boolean} visit  может приехать
 * @prop {boolean} atHome  принимает у себя
 * @prop {enum} YO Юридиское образование (ЮЛ или ФЛ)
 * @prop {collection} specializations Специализации
 * @prop {collection} reviews Отзывы
 * @prop {collection} portfolios Портфолио
 * @prop {collection} workdays Рабочие дни
 * @prop {collection} inFavorite в избранном пользователей
 * @prop {collection} services услуги мастера
 */
module.exports = {
  attributes: {
    filledUser: function () {
      return User.findOne({ id: this.user }).populateAll().then(finded => {
        return finded;
      })
    },  
    user: { model: 'user', unique: true, required: true },
    YO: { type: 'string', enum: ['ЮЛ', 'ФЛ'] },
    voices: { type: 'integer' },
    ratingsAndCounts: { type: 'json' },
    lon: { type: 'string' },
    lat: { type: 'string' },
    address: { type: 'string' },
    averageRating: { type: 'float' },
    minCost: { type: 'string' },
    atHome: { type: 'boolean' },
    visit: { type: 'boolean' },
    raisedUntil: { type: 'datetime' },
    premiumUntil: {type: 'datetime'},
    specializations: {
      collection: 'specialization',
      via: 'inMaster',
      dominant: true,
    },
    reviews: {
      collection: 'review',
      via: 'master',
    },
    portfolios: {
      collection: 'portfolio',
      via: 'master',
    },
    workdays: {
      collection: 'workday',
      via: 'master',
    },
    inFavorite: {
      collection: 'user',
      via: 'favorite'
    },
    services: {
      collection: 'masterservice',
      via: 'master',
    },
    withUser: function () {
      return User.findOne({ id: this.user }).then(user => {
        var x = this.toObject();
        x.user = user.toObject();
        return x;
      })
    }
  },

};

