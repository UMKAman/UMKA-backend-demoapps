/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    index: function (req, res, next) {
        Math.radians = function (degrees) {
            return degrees * Math.PI / 180;
        };
        if (req.method.toLowerCase() != 'get') {
            return next({ message: 'get awaiting' });
        }
        var request = req.query.request;
        var masterSpecialization = req.query.specialization;
        var orderBy = req.query.orderBy;
        var userGender = req.query.gender;
        var masterVisitAtHome = req.query.visitathome;
        var masterVisit = req.query.visit;
        var reviewonly = req.query.reviewonly;
        var masterServiceFromCost = req.query.minCost;
        var masterServiceToCost = req.query.maxCost;

        var userCond = {};
        var costCond = {};
        var masterCond = {};
        var specializationCond = {};

        var sortCond;
        switch (orderBy) {
            case 'cost':
                sortCond = 'minCost ASC'
                break;
            case 'rating':
                sortCond = 'averageRating ASC'
                break;
            default:
                break;
        }

        if (request) {
            userCond.name = request;
        }
        if (masterSpecialization) {
            specializationCond.where = { id: masterSpecialization };
        }
        if (userGender) {
            userCond.gender = userGender;
        }
        if (masterVisitAtHome) {
            masterCond.atHome = masterVisitAtHome;
        }
        if (masterVisit) {
            masterCond.visit = masterVisit;
        }
        // if (reviewonly) {
        //     reviewCond.visit = masterVisit;
        // }
        if (masterServiceFromCost && masterServiceToCost) {
            costCond.cost = {
                'minCost': {
                    '>=': masterServiceFromCost,
                    '<=': masterServiceToCost,
                }
            };
        }
        if (masterServiceFromCost && !masterServiceToCost) {
            costCond.cost = {
                'minCost': {
                    '>=': masterServiceFromCost
                }
            };
        }
        if (!masterServiceFromCost && masterServiceToCost) {
            costCond.cost = {
                'minCost': {
                    '<=': masterServiceToCost
                }
            };
        }

        /**
         *  --- START GEO --- 
        */
        var _origlon = req.query.lon;
        var _origlat = req.query.lat;
        var _distanse = req.query.dist;

        var origlon = parseFloat(_origlon);
        var origlat = parseFloat(_origlat);
        var distance_in_km = parseFloat(_distanse);

        if (origlon && origlat && distance_in_km) {
            var lon1 = origlon + (distance_in_km / Math.abs(Math.cos(Math.radians(origlat)) * 111))
            var lat1 = origlat + (distance_in_km / 111)
            var lon2 = origlon - (distance_in_km / Math.abs(Math.cos(Math.radians(origlat)) * 111))
            var lat2 = origlat - (distance_in_km / 111)
            masterCond.lat = {
                '<': lat1,
                '>': lat2,
            };
            masterCond.lon = {
                '<': lon1,
                '>': lon2
            }
        }
        /** 
         * ---END GEO--- 
         * */
        Master.find()
            .where(masterCond)
            .populate('specializations', specializationCond)
            .populate('reviews')
            .populate('services', costCond)
            .populate('user')
            .sort(sortCond)
            .then(matchRecords => {
                _.remove(matchRecords, record => {
                    if (record.user === null) {
                        return true;
                    }
                    if (record.specializations.length == 0) {
                        return true;
                    }
                    if (userCond.gender && record.user.gender != userCond.gender) {
                        return true;
                    }
                    if (userCond.name && record.user.name.indexOf(userCond.name) == -1) {
                        return true;
                    }
                    if (costCond && record.services.length == 0) {
                        return true
                    }
                    if (reviewonly && record.reviews.length == 0) { //check this ("true" and "false" like a string => true)
                        return true
                    }
                    return false;
                })
                return res.json(matchRecords);
            }).catch(err => {
                next(err);
            })
    }
};

/**
 * 
 * @api {get} /search Поиск мастеров
 * @apiName getMastersByFilter
 * @apiGroup Search
 * @apiVersion  0.1.0
 * @apiExample {type} Example usage:
    /search?specialization=2&gender=Муж&visitathome=true&visit=false&minCost=3000&maxCost=5000&orderBy=cost
 * 
 * @apiParam  {String} specialization ид специализации (number)
 * @apiParam  {String="Муж","Жен"} gender пол 
 * @apiParam  {Boolean=true,false} visitathome может приехать
 * @apiParam  {Boolean=true,false} visit принимает у себя
 * @apiParam  {Boolean=true,false} reviewsonly только с отзывами
 * @apiParam  {String} minCost минимальная стоимость 
 * @apiParam  {String} maxCost максимальная стоимость
 * @apiParam  {String="cost","rating"} orderBy порядок сортировки, сортирует по ASC
 * @apiParam  {String} request строка поиска (ищет по имени пользователя)
 * @apiParam  {String} lon широта (точки поиска)
 * @apiParam  {String} lat долгота (точки поиска)
 * @apiParam  {String} dist радиус поиска (в КИЛОМЕТРАХ)
 * 
 */
