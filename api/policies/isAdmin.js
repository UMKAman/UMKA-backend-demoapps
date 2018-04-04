module.exports = function (req, res, next) {
    if (req.user) {
        if (req.user.isAdmin) {
            return next();
        }
    }
    return next({ message: 'admin required' });
}