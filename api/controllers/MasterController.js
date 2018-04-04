/**
 * MasterController
 *
 * @description :: Server-side logic for managing masters
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res, next) {
        switch (req.method.toLowerCase()) {
            case 'post':
            case 'put':
                req.body.user = req.user.id;
                delete req.body.raisedUntil;
                return next();
            default:
                return next();
        }
    }
};

/**
 * 
 * @api {post} /master/:id/specializations/:spid добавить мастеру специализации
 * @apiName setMasterSpec   
 * @apiGroup Master
 * @apiVersion  0.0.0
 * 
 * 
 */
/**
 * 
 * @api {post} /master create master
 * @apiName createMaster
 * @apiGroup Master
 * @apiVersion  0.0.0
 * 
 * 
 */
/**
 * 
 * @api {get} /master get all masters
 * @apiName getMasters
 * @apiGroup Master
 * @apiVersion  0.0.0
 * @apiDescription user /master?where={"field":value} for filter
 */
/**
 * 
 * @api {get} /master/:id get mater by id
 * @apiName getMaster
 * @apiGroup Master
 * @apiVersion  0.0.0
 * 
 * 
 */
/**
 * 
 * @api {put} /master/:id update master
 * @apiName updateMaster
 * @apiGroup Master
 * @apiVersion  0.0.0
 * 
 */
/**
 * 
 * @api {delete} /master/:id delete master
 * @apiName deleteMaster
 * @apiGroup Master
 * @apiVersion  0.0.0
 * 
 * 
 */

