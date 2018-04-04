module.exports = (req, res, next) => {
    /** review id */
    if (req.params && req.params.id) {
        Review.findOne({ id: req.params.id }).then(finded => {
            if (finded.writter == req.user.id) {
                return next();
            } else {
                throw { code: 11 };
            }
        }).catch(err => {
            return res.sError(err);
        })
    } else {
        return res.sError({ code: 11 });
    }
}