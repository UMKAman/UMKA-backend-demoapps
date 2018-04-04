module.exports = function (req, res, next) {
    if (req.query && req.query['where']) {
        let what = JSON.parse(req.query.where);
        if (what['user'] && what['user'] == req.user.id) {
            return next();
        } else if (what['master'] && req.master && req.master.id === what['master']) {
            return next();
        } else {
            return res.sError({ code: 10 });
        }
    } else {
        return res.sError({ code: 10 });
    }
}