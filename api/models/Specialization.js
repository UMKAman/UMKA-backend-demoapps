/**
 * Specialization.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace Specialization
 * @prop {string} name наименование
 * @prop {string} color hex-цвета
 * @prop {string/blob} pic картинка
 * @prop {model} parent специализация которой пренадлежит текущая, null если самая верхняя
 * @prop {collection} child массив специализаций, у которых parent текущая
 * @prop {collection} inMaster мастера, у которых эта специализация
 */
module.exports = {

  attributes: {
    name: { type: 'string' },
    nameEn: {type: 'string'},
    color: { type: 'string' },
    pic: { type: 'string' },
    parent: { model: 'specialization' },
    child: {
      collection: 'specialization',
      via: 'parent'
    },
    inMaster: {
      collection: 'master',
      via: 'specializations'
    }
  }
};

