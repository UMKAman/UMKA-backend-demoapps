module.exports = (req, res, next) => {
    if (req.user && req.user.id) {
        return next();
    } else {
        return res.sError({ code: 11 });
    }
}