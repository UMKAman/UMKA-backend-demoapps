var Promise = require('bluebird');

module.exports = {
    query: function (req) {
        var masterQueryAsync = Promise.promisify(Master.query);
        var skip = actionUtil.parseSkip(req);
        var limit = actionUtil.parseLimit(req);
        var where = actionUtil.parseCriteria(req);
        var query = 'SELECT * FROM umka.master '
        var length = Object.keys(where).length;
        if (length > 0) {
            query += ' WHERE ';
        }
        var index = 0;
        for (var key in where) {
            if (index != 0) query += ' AND ';
            query += key + ' = ' + where[key];
        }
        query += ' ORDER BY raisedUntil is not null and raisedUntil > NOW() DESC, ' +
            'CASE ' +
            'WHEN raisedUntil > NOW() AND TIME(raisedUntil) >= TIME(NOW()) THEN TIMESTAMP(CURDATE(), TIME(raisedUntil)) ' +
            'WHEN raisedUntil > NOW() AND TIME(raisedUntil) < TIME(NOW()) THEN TIMESTAMP(DATE_ADD(CURDATE(), INTERVAL -1 DAY), TIME(raisedUntil)) ' +
            'ELSE NULL ' +
            'END DESC, ' +
            'createdAt DESC ' +
            'LIMIT ' + skip + ',' + limit;
        var sorted;
        return masterQueryAsync(query).then(result => {
            sorted = result;
            var ids = [];
            _.each(sorted, user => {
                ids.push(user.id);
            })
            query = Master.find()
                .where({ id: ids });
            return actionUtil.populateRequest(query, req);
        }).then(data => {
            var ids = [];
            _.each(data, user => {
                var _index;
                var temp = _.find(sorted, (_user, index) => {
                    _index = index;
                    return _user.id == user.id;
                });
                sorted[_index] = user;
            })
            return sorted;
        })
    }
}