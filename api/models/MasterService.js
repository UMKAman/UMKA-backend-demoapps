/**
 * MasterService.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace serviceMaster(Услуги)
 * @prop {model} master Мастер чья услуга
 * @prop {string} name Наименование услуги
 * @prop {string} cost Стоимость услуги
 * @prop {model} currency Валюта стоимости
 * @prop {string} count Количество услуги
 * @prop {string} measure Единица измерения услуги
 */
module.exports = {

  attributes: {
    master: { model: 'master' },
    name: { type: 'string' },
    cost: { type: 'string' },
    currency: { type: 'string' },
    count: { type: 'string' },
    measure: { type: 'string' },
  }
};

