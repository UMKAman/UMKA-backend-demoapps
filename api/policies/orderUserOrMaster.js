module.exports = function (req, res, next) {
    if (req.params && req.params.id) {
        Order.findOne({ id: req.params.id }).then(finded => {
            if (finded.user == req.user.id || finded.master == req.master.id) {
                return next();
            } else {
                throw { code: 10 }
            }
        }).catch(err => {
            return res.sError(err);
        })
    } else {
        return res.sError({ code: 10 });
    }

}