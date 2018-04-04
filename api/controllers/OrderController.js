/**
 * OrderController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const _ = require('lodash');
const Promise = require('bluebird');
module.exports = {
  
};


/**
 * 
 * @api {post} /order Создать заказ
 * @apiName createOrder
 * @apiGroup Order
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} paramName paramValue
 * 
 * @apiSuccess (200) {string} order json-string creared order
 * 
 * @apiParamExample  {type} Request-Example:
   {
       user : 114, //id ПОЛЬЗОВАТЕЛЯ!!!
       master: 115, //id МАСТЕРА!!!
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 14445
       "user" : {model.user},
       "master": {model.master},
       "masterApprove" : false
   }
 * 
 * 
 */
/**
 * 
 * @api {get} /order Получить вообще все ордеры
 * @apiName getOrders
 * @apiGroup Order
 * @apiVersion  0.1.0
 * 
 * @apiSuccess (200) {string} orders json-string array of orders
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       [
           {
               Order1,
           },
           {
                Order2,
           },
           ...
       ]
   }
 * 
 * 
 */

/**
 * @api {get} /order?where={"master":115} Получить все ордеры мастера с id 115
 * @apiName getMasterOrders
 * @apiGroup Order
*/

/**
 * @api {get} /order?where={"user":114} Получить все ордеры пользователя с id 114
 * @apiName getUserOrders
 * @apiGroup Order
 */

/**
 * 
 * @api {get} /order/:id Получить ордер по ИД
 * @apiName getOrder
 * @apiGroup Order
 * @apiVersion  0.1.0
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id" : 14433
       "user" : {model.user},
       "master": {model.master},
       "masterApprove" : true
   }
 * 
 * 
 */

/**
 * 
 * @api {put} /order/:id Изменить order
 * @apiName updateOrder
 * @apiGroup Order
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} paramName paramValue
 * 
 * @apiSuccess (200) {string} noname json-string updated order
 * 
 * @apiParamExample  {type} Request-Example:
   {
       masterApprove : true,
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id" : 14433
       "user" : {model.user},
       "master": {model.master},
       "masterApprove" : true
   }
 * 
 * 
 */

/**
 * 
 * @api {delete} /order/:id Delete order with id
 * @apiName deleteOrder
 * @apiGroup Order
 * @apiVersion  0.1.0
 * 
 * @apiSuccess (200) {string} noname json-string with deleted order
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id" : 14433
       "user" : {model.user},
       "master": {model.master},
       "masterApprove" : true
   }
 * 
 * 
 */

