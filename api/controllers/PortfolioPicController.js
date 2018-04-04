/**
 * PortfolioPicController
 *
 * @description :: Server-side logic for managing portfoliopics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res, next) {
        switch (req.method.toLowerCase()) {
            case 'put':
            case 'post':
                req.file('pic').upload({
                    dirname: sails.config.appPath + '/assets/pics/portfolioPic/' + req.user.id,
                    maxBytes: 12000000
                }, function (err, uploadedFiles) {
                    if (err) {
                        sails.log.info('error while upload file in' + this.identity + ' : ', err);
                        req.body.pic = '';
                    } else if (uploadedFiles.length === 0) {
                        req.body.pic ? delete req.body.pic : null;
                    } else {
                        req.body.pic = '/pics/portfolioPic/' + req.user.id + '/' + uploadedFiles[0].fd.split('/')[uploadedFiles[0].fd.split('/').length - 1];
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
 * @api {post} /portfoliopic create picture for portfolio
 * @apiName createPortfolioPic
 * @apiGroup PPic
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {blob} pic multipart/form-data
 * @apiParam  {String} portfolio portfolio-id
 * 
 * @apiParamExample  {type} Request-Example:
   {
       pic : multipart/form-data,
       portfolio: 112
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id":33,
       "portfolio": {model.portfolio},
       "pic": "/link/to/pic"
   }
 * 
 * 
 */
/**
 * 
 * @api {get} /portfolioPic get all portfolioPics
 * @apiName getPorfolioPics
 * @apiGroup PPic
 * @apiVersion  0.0.0
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       [
        {
            "id":33,
            "portfolio": {model.portfolio},
            "pic": "/link/to/pic"
        },
        {
            "id":34,
            "portfolio": {model.portfolio},
            "pic": "/link/to/pic"
        },
        ...
       ]
   }
 * 
 * 
 */
/**
 * @api {get} /portfolioPic?where={"portfolio":114} get portfoliopics for portfolio with id 114
 * @apiName getPortfolioPic
 * @apiGroup PPic
 */
/**
 * 
 * @api {get} /portfolioPic/:id get portfoliopic by id
 * @apiName getPorfolioPic
 * @apiGroup PPic
 * @apiVersion  0.0.0
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
        "id":34,
        "portfolio": {model.portfolio},
        "pic": "/link/to/pic"
   }
 * 
 * 
 */
/**
 * 
 * @api {put} /portfoliopic/:id update portfoliopic by id
 * @apiName updatePPic
 * @apiGroup PPic
 * @apiVersion  0.0.0
 * 
 * 
 * @apiParam  {blob} pic multipart/form-data
 * 
 * @apiParamExample  {type} Request-Example:
   {
       pic : multipart/form-data
   }
 * 
 * 
 * @apiSuccessExample {type} Success-Response:
   {
        "id":34,
        "portfolio": {model.portfolio},
        "pic": "/link/to/pic"
   }
 * 
 * 
 */

/**
 * 
 * @api {delete} /portfoliopic/:id delete portfolioPic by id
 * @apiName deletePPic
 * @apiGroup PPic
 * @apiVersion  0.0.0
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "id":34,
        "portfolio": {model.portfolio},
        "pic": "/link/to/pic"
   }
 * 
 * 
 */

