/**
 * ReviewController
 *
 * @description :: Server-side logic for managing reviews
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {

};

/**
 * 
 * @api {post} /review create review
 * @apiName createRevoew
 * @apiGroup Review
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {String} writter user-id
 * @apiParam  {String} master master-id
 * @apiParam  {String} text review text
 * @apiParam  {String} rating review rating (1-5)
 * 
 * @apiSuccess (200) {string} noname json-string review model
 * 
 * @apiParamExample  {type} Request-Example:
   {
       writter : 112,
       master: 12,
       text: "very cool master",
       rating: "4.5"
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 2,
       "master": {master.model},
       "writter": {user.model},
       "text": "very cool master",
       rating: "4.5"
   }
 * 
 * 
 */

/**
 * 
 * @api {get} /review get all revies
 * @apiName getReviews
 * @apiGroup Review
 * @apiVersion  0.0.0
 * 
 * 
 * @apiSuccess (200) {string} noname json-string array of reviews
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       [
           {
                "id": 2,
                "master": {master.model},
                "writter": {user.model},
                "text": "very cool master",
                rating: "4.5"
           },{
                "id": 3,
                "master": {master.model},
                "writter": {user.model},
                "text": "very cool master",
                rating: "4.5"
           },
           ...
       ]
   }
 * 
 * 
 */
/**
 * @api {get} /review?where={"writter"=112} get reviews written by user with id 112
 * @apiName getUserReviews
 * @apiGroup Review
 */
/**
 * 
 * @api {get} /review/:id get review by id
 * @apiName getReview
 * @apiGroup Review
 * @apiVersion  0.0.0
 * 
 * 
 * @apiSuccess (200) {string} noname json-string with review object
 * 
 * @apiSuccessExample {type} Success-Response:
   {
        "id": 3,
        "master": {master.model},
        "writter": {user.model},
        "text": "very cool master",
        rating: "4.5"
   }
 * 
 * 
 */
/**
 * 
 * @api {put} /review/:id update review
 * @apiName updateReview
 * @apiGroup Review
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {String} rating rating
 * @apiParam  {String} text review text
 * 
 * @apiSuccess (200) {string} noname json-string with updated review
 * 
 * @apiParamExample  {type} Request-Example:
   {
       rating : "3",
       text : "masta get low :(",
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 3,
        "master": {master.model},
        "writter": {user.model},
        "text": "masta get low :(",
        rating: "3"
   }
 * 
 * 
 */
/**
 * 
 * @api {delete} /review/:id delete review by id
 * @apiName deleteReview
 * @apiGroup Review
 * @apiVersion  0.0.0
 * 
 * 
 * @apiSuccess (200) {string} noname json-string with deleted review
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 3,
        "master": {master.model},
        "writter": {user.model},
        "text": "masta get low :(",
        rating: "3"
   }
 * 
 * 
 */

