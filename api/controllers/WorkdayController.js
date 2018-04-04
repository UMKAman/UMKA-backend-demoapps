/**
 * WorkdayController
 *
 * @description :: Server-side logic for managing workdays
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/**
 * 
 * @api {post} /workday/:WDid/workhours/:WHid set accociation wokrhour to workday
 * @apiName accociateWHToWD
 * @apiGroup Workday
 * @apiVersion  0.0.0
 * 
 */

/**
 * 
 * @api {post} /workday create workday
 * @apiName createWorkday
 * @apiGroup Workday
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {String} master master-id
 * @apiParam  {String} date date for the workday
 * 
 * @apiSuccess (200) {String} noname json-string created model
 * 
 * @apiParamExample  {type} Request-Example:
   {
       master: 223,
       date: '2017-01-31' //'YYYY-MM-DD' date format
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 14,
       "master": {model.master},
       "date": "2017-01-31",
       "workhours":[
           {workhour1},
           {workhour2},
           ...
        ]
   }
 * 
 * 
 */
/**
 * 
 * @api {get} /workday get all workdays
 * @apiName getWorkdays
 * @apiGroup Workday
 * @apiVersion  0.0.0
 * @@apiDescription use /workday?where={"master":112}
 * 
 * @apiSuccess (200) {String} noname json-string Array of workdays
 * 
 * @apiSuccessExample {type} Success-Response:
   {
    [
     {
       "id": 14,
       "master": {model.master},
       "date": "2017-01-31",
       "workhours":[
           {workhour1},
           {workhour2},
           ...
        ]
     },
     {
       "id": 15,
       "master": {model.master},
       "date": "2017-01-31",
       "workhours":[
           {workhour1},
           {workhour2},
           ...
        ]
     },
     ...
    ]
   }
 * 
 * 
 */
/**
 * 
 * @api {get} /workday/:id get workday by id
 * @apiName getWorkday
 * @apiGroup Workday
 * @apiVersion  0.0.0
 * 
 * 
 * @apiSuccess (200) {string} noname json-string workday model
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 15,
       "master": {model.master},
       "date": "2017-01-31",
       "workhours":[
           {workhour1},
           {workhour2},
           ...
        ]
   }
 * 
 * 
 */
/**
 * 
 * @api {put} /workday/:id update workday
 * @apiName updateWorkday
 * @apiGroup Workday
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {datetime} date date of workday
 * 
 * @apiSuccess (200) {string} noname json-string of updated workday model
 * 
 * @apiParamExample  {type} Request-Example:
   {
       date : "2017-02-28"
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 15,
       "master": {model.master},
       "date": "2017-02-28",
       "workhours":[
           {workhour1},
           {workhour2},
           ...
        ]
   }
 * 
 * 
 */
/**
 * 
 * @api {delete} /workday/:id delete workdays
 * @apiName deleteWorkday
 * @apiGroup Workday
 * @apiVersion  0.0.0
 * 
 * 
 * @apiSuccess (200) {string} noname json-string of deleted workday model
 * 
 * @apiSuccessExample {type} Success-Response:
   {
      "id": 15,
       "master": {model.master},
       "date": "2017-02-28",
       "workhours":[
           {workhour1},
           {workhour2},
           ...
        ]
   }
 * 
 * 
 */
module.exports = {
  index: function (req, res, next) {
    switch (req.method.toLowerCase()) {
      case 'post':
      case 'put':
        req.body.master  = req.master.id;
        return next();
        break;
      default:
        return next();
        break;
    }
  }
};

