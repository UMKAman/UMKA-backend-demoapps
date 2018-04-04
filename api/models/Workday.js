/**
 * Workday.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace Workday
 * @prop {model} master master
 * @prop {datetime} date дата рабочего дня
 * @prop {collection} workhours список рабочих часов
 */
module.exports = {

  attributes: {
    master: { model: 'master',required: true },
    date: { type: 'datetime', required: true },
    workhours: {
      collection: 'workhour',
      via: 'workday',
    }
  }
};

