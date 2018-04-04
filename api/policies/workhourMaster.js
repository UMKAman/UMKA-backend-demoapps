module.exports = (req, res, next) => {
    /** id of workhour */
    if (req.params && req.params.id) {
        Workhour.findOne({ id: req.params.id }).populate('workday').then(finded => {
            if (finded.workday.master == req.master.id) {
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