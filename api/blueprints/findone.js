/**
 * Module dependencies
 */
const _ = require('lodash');

module.exports = function findRecords(req, res) {

    var Model = actionUtil.parseModel(req);
    var pk = actionUtil.requirePk(req);
    var record;
    var query = Model.findOne(pk);
    query = actionUtil.populateRequest(query, req);
    query.then(matchingRecord => {
        if (!matchingRecord) {
            return res.ok();
        }

        record = matchingRecord.toObject();
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
        return Promise.all(q)
            .spread((master, user) => {
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
                return res.ok(record);
            })
    }).catch(err => {
        return res.serverError(err);
    });
};
