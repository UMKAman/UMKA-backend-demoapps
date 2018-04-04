/**
 * Module dependencies
 */
const _ = require('lodash');

/**
 * Find Records
 *
 *  get   /:modelIdentity
 *   *    /:modelIdentity/find
 *
 * An API call to find and return model instances from the data adapter
 * using the specified criteria.  If an id was specified, just the instance
 * with that unique id will be returned.
 *
 * Optional:
 * @param {Object} where       - the find criteria (passed directly to the ORM)
 * @param {Integer} limit      - the maximum number of records to send back (useful for pagination)
 * @param {Integer} skip       - the number of records to skip (useful for pagination)
 * @param {String} sort        - the order of returned records, e.g. `name ASC` or `age DESC`
 * @param {String} callback - default jsonp callback param (i.e. the name of the js function returned)
 */

module.exports = function findRecords(req, res) {

    var Model = actionUtil.parseModel(req);
    var query;
    if (req.options.controller == 'master') {
        query = masterQuery.query(req);
    } else {
        query = Model.find()
            .where(actionUtil.parseCriteria(req))
            .limit(actionUtil.parseLimit(req))
            .skip(actionUtil.parseSkip(req))
            .sort(actionUtil.parseSort(req));
        query = actionUtil.populateRequest(query, req);
    }

    query.then(matchingRecords => {

        var result = [];
        _.each(matchingRecords, record => {
            result.push(record.toObject());
        })
        return Promise.each(result, record => {
            var master = record.master || record.ownerMaster;
            var user = record.user || record.ownerUser || record.writter;
            /** query building */
            var q = [];
            if (master) {
                q.push(Master.findOne({ id: (typeof master === 'object') ? master.id : master }).populate('user'));
            } else {
                q.push(undefined);
            }
            if (user && typeof user !== 'object') {
                q.push(User.findOne({ id: user }));
            } else {
                q.push(undefined);
            }
            return Promise.all(q).spread((master, user) => {
                if (master) {
                    if (record.master) {
                        record.master = master;
                    } else if (record.ownerMaster) {
                        record.ownerMaster = master;
                    }
                }
                if (user) {
                    if (record.user) {
                        record.user = user;
                    }
                }
            });
        }).then(recs => {
            return res.ok(recs);
        }).catch(err => {
            return res.serverError(err);
        })
    });
};