module.exports = (req, res, next) => {
    if (req.master && req.master.id) {
        return next();
    } else {
        return res.sError({code: 10});
    }
}