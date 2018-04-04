module.exports = (req, res, next) => {
    if (req.user.isAdmin) {
        return next();
    } else {
        return res.sError({ code: 9 });
    }
}