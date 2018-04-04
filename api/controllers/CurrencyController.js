/**
 * CurrencyController
 *
 * @description :: Server-side logic for managing currencies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


/**
 * 
 * @api {get} /currency получить все валюты
 * @apiName getCurrencies
 * @apiGroup Currency
 * @apiVersion  0.1.0
 * 
 * @apiSuccessExample {type} Success-Response:
   [
       {
           "id":1,
           "name": "рубли"
       },
       {
           "id":2,
           "name": "доллар"
       },
       ...
   ]
 * 
 * 
 */

/**
 * 
 * @api {get} /currency/:id Получить отдельную валюту
 * @apiName getCurrency
 * @apiGroup Currency
 * @apiVersion  0.1.0
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       {
           "id":1,
           "name": "рубли"
       }
   }
 * 
 * 
 */

/**
 * 
 * @api {post} /currency создать валюту
 * @apiName createCurrence
 * @apiGroup Currency
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} name наименование валюты
 * 
 * @apiParamExample  {type} Request-Example:
   {
       name : "юань"
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
           "id":3,
           "name": "юань"
   }
 * 
 * 
 */

/**
 * 
 * @api {put} /currency/:id изменить валюту
 * @apiName changeCurrency
 * @apiGroup Currency
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} name наименование валюты
 * 
 * @apiParamExample  {type} Request-Example:
   {
       name : "рубль"
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
           "id":1,
           "name": "рубль"
   }
 * 
 * 
 */

/**
 * 
 * @api {delete} /currency/:id удалить валюту
 * @apiName deleteCurrency
 * @apiGroup Currency
 * @apiVersion  0.1.0
 * 
 * @apiSuccessExample {type} Success-Response:
   {
           "id":1,
           "name": "рубль"
   }
 * 
 * 
 */
module.exports = {
	
};

