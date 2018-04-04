/**
 * Jwt.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

/**
 * @namespace Jwt
 * @prop {model} user User-model
 * @prop {string} device device "from" description
 * @prop {string} jwt jwt-token to use
 */
module.exports = {
  attributes: {
    user: { model: 'user' },
    device: { type: 'string' },
    jwt: { type: 'string' },
  }
};

