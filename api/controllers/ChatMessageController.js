/**
 * ChatMessageController
 *
 * @description :: Server-side logic for managing chatmessages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    middlePOST: function (req, res, next) {
        req.file('pic').upload({
            dirname: sails.config.appPath + '/assets/pics/messages/' + req.user.id,
            maxBytes: 12000000
        }, function (err, uploadedFiles) {
            if (err) {
                sails.log.info('error while upload file in' + this.identity + ' : ', err);
                // req.body.avatar = '';
            } else if (uploadedFiles.length === 0) {
                req.body.pic ? delete req.body.pic : null;
            } else {
                req.body.pic = '/pics/messages/' + req.user.id + '/' + uploadedFiles[0].fd.split('/')[uploadedFiles[0].fd.split('/').length - 1];
            }

            if (req.master !== null) {
                req.body.ownerMaster = req.master.id
            } else {
                req.body.ownerUser = req.user.id
            }
            return next();
        });
    },
   
};

/**
 * @api {get} /chatmessage get ALL chat message
 * @apiName getMessages
 * @apiGroup Message
 * @apiVersion  0.1.0
 */

/**
 * @api {get} /chatmessage/:id get chat message by id
 * @apiName getMessage
 * @apiGroup Message
 * @apiVersion  0.1.0
 */

/**
 * @api {post} /chatmessage create chat message
 * @apiName createMessage
 * @apiGroup Message
 * @apiVersion  0.1.0
 * @apiHeaderExample {type} Request-Example:
     "Content-type" : "multipart/form-data"
 * @apiParam  {String} text message text
 * @apiParam  {blob} pic pic of message
 * @apiParam  {Number} chat chat message for
 */
