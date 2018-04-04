module.exports = (req, res, next) => {
    if (req.params && req.params.id && (req.master.id == req.params.id)) {
        return next();
    } else {
        return res.sError({ code: 10 });
    }
}