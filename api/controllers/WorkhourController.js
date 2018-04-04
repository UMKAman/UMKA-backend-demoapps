/**
 * WorkhourController
 *
 * @description :: Server-side logic for managing workhours
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/**
 * 
 * @api {post} /workhour create the workhour
 * @apiName createWorkhour
 * @apiGroup Workhour
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {int} workday workday-id
 * @apiParam  {string} hour datetime ('YYYY-MM-DD HH:mm:ss')
 * @apiParam  {boolean} busy true/false (defaults to false)
 * 
 * @apiSuccess (200) {string} noname json-string Workhour created model
 * 
 * @apiParamExample  {type} Request-Example:
   {
       workday: 12,
       hour: "2017-01-31 15:00:00",
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 34,
       "workday": 12,
       "hour": "2017-01-31 15:00:00",
       "busy": false  
   }
 * 
 * 
 */

/**
 * 
 * @api {get} /Workhour get all workhours
 * @apiName getWorkhours
 * @apiGroup Workhour
 * @apiVersion  0.0.0
 * @@apiDescription use /workhour?where={"workday"=12}
 * 
 * @apiSuccess (200) {string} noname json-string array of workhours models
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       [
           {
            "id": 34,
            "workday": 12,
            "hour": "2017-01-31 15:00:00",
            "busy": false  
           },
           {
            "id": 35,
            "workday": 12,
            "hour": "2017-01-31 16:00:00",
            "busy": false  
           },
       ]
   }
 * 
 * 
 */
/**
 * 
 * @api {get} /workhour/:id get workhour by id
 * @apiName getWorkhour
 * @apiGroup Workhour
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {String} paramName description
 * 
 * @apiSuccess (200) {type} name description
 * 
 * @apiParamExample  {type} Request-Example:
   {
       property : value
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       property : value
   }
 * 
 * 
 */
/**
 * 
 * @api {put} /workhour/:id update workhour record
 * @apiName updateWorkhour
 * @apiGroup Workhour
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {String} paramName description
 * 
 * @apiSuccess (200) {type} name description
 * 
 * @apiParamExample  {type} Request-Example:
   {
       property : value
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       property : value
   }
 * 
 * 
 */
/**
 * 
 * @api {delete} /workhour/:id delete workhour
 * @apiName deleteWorkhour
 * @apiGroup Workhour
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {String} paramName description
 * 
 * @apiSuccess (200) {type} name description
 * 
 * @apiParamExample  {type} Request-Example:
   {
       property : value
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       property : value
   }
 * 
 * 
 */
module.exports = {

};

