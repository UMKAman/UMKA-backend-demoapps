/**
 * PortfolioPic.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace PortfolioPic
 * @prop {model} portfolio Portfolio
 * @prop {string/blob} pic картинка  
 */
module.exports = {

  attributes: {
    portfolio: { model: 'portfolio', required: true },
    pic: { type: 'string' },
  }
};

