module.exports = (req, res, next) => {
    if (req.user && req.user.id) {
        Master.findOne({ user: req.user.id }).then(ok => {
            if (ok) {
                req.master = ok;
                return next();
            } else {
                throw { code: 11 };
            }
        }).catch(err => {
            res.sError(err);
        })
    } else {
        return res.sError({ code: 11 });
    }
}