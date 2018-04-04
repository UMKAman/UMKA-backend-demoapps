/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res, next) {
        switch (req.method.toLowerCase()) {
            case 'put':
            case 'post':
                req.file('pic').upload({
                    dirname: sails.config.appPath + '/assets/pics/messagePic/' + req.user.id,
                    maxBytes: 12000000
                }, function (err, uploadedFiles) {
                    if (err) {
                        sails.log.info('error while upload file in' + this.identity + ' : ', err);
                        req.body.pic = '';
                    } else if (uploadedFiles.length === 0) {
                        req.body.pic ? delete req.body.pic : null;
                    } else {
                        req.body.pic = '/pics/messagePic/' + req.user.id + '/' + uploadedFiles[0].fd.split('/')[uploadedFiles[0].fd.split('/').length - 1];
                    }
                    setTimeout(function () {
                        return next();
                    }, 1500);
                });
                break;
            default:
                return next();
        }
    }
};

 /**
 * 
 * @api {get} /message?where={"sender":UserID} Получить вообще все мессаджи отправленные
 * @api {get} /message?where={"receiver":UserID} Получить вообще все мессаджи получаемые
 * @apiName getMessages
 * @apiGroup Message(DEPRECATED)
 * @apiVersion  0.1.0
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "messages" : [
           {
               message1
           },
           {
               message2
           },
           ...
           ]
   }
 * 
 * 
 */
/**
 * 
 * @api {get} /message/:id Получить сообщени по id
 * @apiName getMessage
 * @apiGroup Message(DEPRECATED)
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} id id-сообщения
 * 
 * @apiSuccess (200) {string} message json-string of message model
 * 
 * @apiParamExample  {type} Request-Example:
   {
       id : 25
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 25,
       "sender" : { user.model },
       "receiver": { user.model },
       "message": "hi there",
       "pic" : "link/to/pic",
       "readed": false
   }
 * 
 * 
 */
/**
 * 
 * @api {put} /message/:id Внести изменение в сообщение (например readed true сделать)
 * @apiName setMessage
 * @apiGroup Message(DEPRECATED)
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} id message-id
 * @apiParam  {String} paramName paramValue
 * 
 * @apiSuccess (200) {string} message json-string of message model
 * 
 * @apiParamExample  {type} Request-Example:
   {
       id : 25,
       readed: true
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 25,
       "sender" : { user.model },
       "receiver": { user.model },
       "message": "hi there",
       "pic" : "link/to/pic",
       "readed": true
   }
 * 
 * 
 */
/**
 * 
 * @api {post} /message Создать сообщение
 * @apiName createMEssage
 * @apiGroup Message(DEPRECATED)
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} paramName paramValue
 * 
 * @apiSuccess (200) {string} message json-string of created message
 * 
 * @apiParamExample  {type} Request-Example:
   {
       pic : multipart/form-data,
       sender : 16,
       receiver: 132,
       message: "hi there"
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 1225,
       "sender" : { user.model },
       "receiver": { user.model },
       "message": "hi there",
       "pic" : "link/to/pic",
       "readed": false
   }
 * 
 * 
 */
/**
 * 
 * @api {delete} /message/:id Удалить сообщение
 * @apiName deletMessage
 * @apiGroup Message(DEPRECATED)
 * @apiVersion  0.1.0
 * 
 * 
 * @apiParam  {String} id message-id
 * 
 * @apiSuccess (200) {string} message json-string deleted message
 * 
 * @apiParamExample  {type} Request-Example:
   {
       id : 1554
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id": 1225,
       "sender" : { user.model },
       "receiver": { user.model },
       "message": "hi there",
       "pic" : "link/to/pic",
       "readed": false
   }
 * 
 * 
 */


