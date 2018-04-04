/**
 * ServiceController
 *
 * @description :: ОТДАЕТ СЛУЖЕБНУЮ!!! информацию
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    minmaxCost: function (req, res, next) {
        Promise.all([
            MasterService.find().min('cost'),
            MasterService.find().max('cost')
        ]).spread((min, max) => {
            return res.json({
                min: min[0].cost,
                max: max[0].cost
            });
        }).catch(err => {
            next(err);
        })
    }
};

/**
 * 
 * @api {get} /service/minmaxCost Получить минимальную и максимальную цены на работы мастеров
 * @apiName getMinMaxCost
 * @apiGroup Service
 * @apiVersion  0.1.0
 * 
 * @apiSuccessExample {type} Success-Response:
   {
       "min": "200",
       "max": "5000"
   }
 * 
 * 
 */
