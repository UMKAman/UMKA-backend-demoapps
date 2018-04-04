/**
 * Workhour.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace Workhour
 * @prop {model} workday workday
 * @prop {datetime} hour час
 * @prop {boolean} busy занятость
 */
module.exports = {

  attributes: {
    workday: { model: 'workday', required: true },
    hour: { type: 'datetime' },
    busy: { type: 'boolean', defaultsTo: false },
  }
};

