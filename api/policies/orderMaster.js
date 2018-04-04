module.exports = (req, res, next) => {
    /** id of order */
    if (req.params && req.params.id) {
        Order.findOne({ id: req.params.id }).then(finded => {
            if (finded.master == req.master.id) {
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