/**
 * PortfolioController
 *
 * @description :: Server-side logic for managing portfolios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const moment = require('moment');

module.exports = {
    index: function (req, res, next) {
        switch (req.method.toLowerCase()) {
            case 'post':
                Portfolio.find({master : req.master.id}).then(found => {
                    if ((found.length + 1) > 3) {
                        if (!req.master.premiumUntil || moment(req.master.premiumUntil).isBefore(moment())) {
                            return next('Usual account limit exceeded');
                        }
                    }
                    req.body.master = req.master.id;
                    return next();
                })
                break;
            case 'put':
                req.body.master = req.master.id;
                return next();
                break;
            default:
                return next();
                break;
        }
    }
};
/**
 * @api {post} /portfolio/:Pid/pics/:PPid создать ассоциацию картинки и портфолио
 * @apiName PPicToP
 * @apiGroup Portfolio
 * @apiDescription Чтобы добавить картинку в портфолио, надо сначала создать картинку, потом сделать вот этот запрос, чтобы она ассоциировалась с этип портфолио.
 */

/**
 * 
 * @api {post} /portfolio Create portfolio
 * @apiName createPortfolio
 * @apiGroup Portfolio
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {String} paramName paramValue
 * 
 * @apiSuccess (200) {string} noname json-string with created portfolio
 * 
 * @apiParamExample  {type} Request-Example:
   {
       master : 144,
       description: "Крутое портфолио"
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id" : 44323,
       "master": { model.master },
       "description": "Крутое портфолио",
       "pics": [
           {
               "id": 445,
               "portfolio" : 44323,
               "pic": "/link/to/pic"
           },
           {
               "id": 446,
               "portfolio" : 44323,
               "pic": "/link/to/pic"
           },
           ...
       ]
   }
 * 
 * 
 */
/**
 * 
 * @api {get} /portfolio Получить все портфолио 
 * @apiName getPortfolios
 * @apiGroup Portfolio
 * @apiVersion  0.0.0
 * 
 * 
 * @apiSuccess (200) {string} noname json-string array of portfolios
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       [
           {
               "id": 1,
               "master": {model.master},
               "description": "Very cool portfolio",
               "pics":[
                {
                    "id": 445,
                    "portfolio" : 1,
                    "pic": "/link/to/pic"
                },
                {
                    "id": 446,
                    "portfolio" : 1,
                    "pic": "/link/to/pic"
                },
                ...
               ]
           }
       ]
   }
 * 
 * 
 */

/**
 * @api {get} /portfolio?where={"master":113} Получить все портфолио of master with id 114
 * @apiName getMasterPortfolio
 * @apiGroup Portfolio
 */

/**
 * 
 * @api {put} /portfolio/:id update master's portfolio
 * @apiName updatePortfolio
 * @apiGroup Portfolio
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {String} description "new description"
 * 
 * @apiSuccess (200) {string} noname json-string updated portfolio
 * 
 * @apiParamExample  {type} Request-Example:
   {
       description : "new desc"
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       {
               "id": 1,
               "master": {model.master},
               "description": "new desc",
               "pics":[
                {
                    "id": 445,
                    "portfolio" : 1,
                    "pic": "/link/to/pic"
                },
                {
                    "id": 446,
                    "portfolio" : 1,
                    "pic": "/link/to/pic"
                },
                ...
               ]
           }
   }
 * 
 * 
 */

/**
 * 
 * @api {delete} /portfolio/:id delete portfolio
 * @apiName deletePortfolio
 * @apiGroup Portfolio
 * @apiVersion  0.0.0
 * 
 * 
 * @apiSuccess (200) {string} noname json-string with deleted portfolio
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       
        "id": 1,
        "master": {model.master},
        "description": "new desc",
        "pics":[
                {
                    "id": 445,
                    "portfolio" : 1,
                    "pic": "/link/to/pic"
                },
                {
                    "id": 446,
                    "portfolio" : 1,
                    "pic": "/link/to/pic"
                },
                ...
        ]
   }
 * 
 * 
 */


