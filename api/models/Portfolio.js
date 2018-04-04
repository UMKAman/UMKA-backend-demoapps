/**
 * Portfolio.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace Protfolio
 * @prop {model} master master
 * @prop {string} description описание
 * @prop {collection} pics картинки к портфолио
 */
module.exports = {

  attributes: {
    master: { model: 'master', required: true },
    description: { type: 'string' },
    pics: {
      collection: 'portfolioPic',
      via: 'portfolio',
    }
  }
};

