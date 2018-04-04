/**
 * FireTokenController
 *
 * @description :: Server-side logic for managing firetokens
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

};

/**
 * 
 * @api {POST} /firetoken set user's firetoken
 * @apiName setFireToken
 * @apiGroup FireToken
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} token fire-token
 * @apiParam  {String} user user-id
 * @apiParam  {String} device device desctiption
 * 
 * @apiParamExample  {type} Request-Example:
   {
       token : "asdasdasdas",
       user: 1,
       device: 'Android device',
   }
 * 
 * @apiSuccess (200) {type} name description
 * 
 */
