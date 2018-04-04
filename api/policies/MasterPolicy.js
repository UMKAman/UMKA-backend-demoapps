/**
 * to call this policy req.user must be setted
 */
module.exports = function (req, res, next) {

    Master.findOne({ user: req.user.id }).then(finded => {
        if (!finded) {
            return next({ message: 'Master not found' });
        } else {
            next();
        }
    }).catch(err => {
        next(err);
    })

}