/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res, next) {
        if (req.method.toLowerCase() == 'put') {
            var self = this;
            req.file('avatar').upload({
                dirname: sails.config.appPath + '/assets/pics/avatar/' + req.user.id,
                maxBytes: 24000000
            }, function (err, uploadedFiles) {
                if (err) {
                    sails.log.info('error while upload file in' + self.identity + ' : ', err);
                    // req.body.avatar = '';
                } else if (uploadedFiles.length === 0) {
                    req.body.avatar ? delete req.body.avatar : null;
                } else {
                    req.body.avatar = '/pics/avatar/' + req.user.id + '/' + uploadedFiles[0].fd.split('/')[uploadedFiles[0].fd.split('/').length - 1];
                }
                setTimeout(function () {
                    return next();
                }, 1500);
            });
        } else {
            return next();
        }
    },
    populate: function (req, res, next) {
        var Promise = require('bluebird');
        User.findOne({ id: req.params.parentid }).populate(req.options.alias).then(ok => {
            return Promise.map(ok[req.options.alias], (master) => {
                return Master.findOne({ id: master.id }).populate('specializations').populate('services').populate('user');
            }).then(masta => {
                return masta;
            });
        }).then(filledMasters => {
            return res.json(filledMasters);
        }).catch(err => {
            return next(err);
        });
    }
};


/**
 * 
 * @api {post} /user create user
 * @apiName createUser
 * @apiGroup User
 * @apiVersion  0.0.0
 * @apiDescription DO NOT USE THIS API!!!!
 * 
 */

/**
 * 
 * @api {get} /user get all users
 * @apiName getUsers
 * @apiGroup User
 * @apiVersion  0.0.0
 * @apiDescription if need use /user?where={"field":value} for filter
 */

/**
 * 
 * @api {get} /user/:id get user by id
 * @apiName getUser
 * @apiGroup User
 * @apiVersion  0.0.0
 * 
 */

/**
 * 
 * @api {put} /user/:id update user by id
 * @apiName updateUser
 * @apiGroup User
 * @apiVersion  0.0.0
 * 
 */
/**
 * 
 * @api {delete} /user/:id delete user
 * @apiName deleteUser
 * @apiGroup User
 * @apiVersion  0.0.0
 * 
 */

