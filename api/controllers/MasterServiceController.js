/**
 * MasterServiceController
 *
 * @description :: Server-side logic for managing masterservices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res, next) {
        switch (req.method.toLowerCase()) {
            case 'post':
            case 'put':
                req.body.master = req.master.id;
                return next();
            default:
                return next();
        }
    }
};
/**
 * 
 * @api {get} /masterservice получить ВСЕ услуги всех мастеров
 * @apiName getServices
 * @apiGroup masterService
 * @apiVersion  0.1.0
 * 
 * @apiSuccessExample {type} Success-Response:
   [
        {
            "id" : 1,
            "master": {
                master model
            },
            "name": "Перетяжка мебели",
            "cost": "500",
            "currency": "рубли",
        },
        {
            ...
        }
   ]
 * 
 * 
 */

/**
 * 
 * @api {get} /masterservice/:id Получить конкретную услугу мастера
 * @apiName getService
 * @apiGroup masterService
 * @apiVersion  0.1.0
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
            "id" : 1,
            "master": {
                master model
            },
            "name": "Перетяжка мебели",
            "cost": "500",
            "currency":"рубли",
   }
 * 
 * 
 */

/**
 * 
 * @api {put} /masterservice/:id Изменить услугу
 * @apiName changeService
 * @apiGroup masterService
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} name Наименование услуги
 * @apiParam  {String} cost Стоимость услуги
 * @apiParam  {String} currency Валюта услуги
 * 
 * @apiParamExample  {type} Request-Example:
   {
       name : "Стрижка волос",
       cost : "300",
       currency: 2 //use currency ID
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
            "id" : 1,
            "master": {
                master model
            },
            "name": "Стрижка волос",
            "cost": "300",
            "currency":"доллар"
   }
 * 
 * 
 */


/**
 * 
 * @api {post} /masterservice Создание сервиса мастером
 * @apiName createService
 * @apiGroup masterService
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} name Наименование услуги
 * @apiParam  {String} cost Стоимость услуги
 * @apiParam  {String} currency Валюта услуги
 * 
 * @apiSuccess (200) {type} name description
 * 
 * @apiParamExample  {type} Request-Example:
   {
       name : "Репетиторство по русскому",
       cost : "800",
       currency: "рубли" //use currency ID
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
            "id" : 2,
            "master": {
                master model
            },
            "name": "Репетиторство по русскому",
            "cost": "800",
            "currency":"рубли"
   }
 * 
 * 
 */

/**
 * 
 * @api {delete} /masterservice/:id Удаление услуги
 * @apiName deleteService
 * @apiGroup masterService
 * @apiVersion  0.1.0
 * 
 * @apiSuccessExample {type} Success-Response:
   {
            "id" : 2,
            "master": {
                master model
            },
            "name": "Репетиторство по русскому",
            "cost": "800",
            "currency":"рубли"
   }
 * 
 * 
 */


