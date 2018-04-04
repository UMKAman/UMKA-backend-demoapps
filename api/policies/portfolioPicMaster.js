module.exports = (req, res, next) => {
    /** id of portfolioPic */
    if (req.params && req.params.id) {
        PortfolioPic.findOne({ id: req.params.id }).populate('portfolio').then(finded => {
            if (finded.portfolio.master == req.master.id) {
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