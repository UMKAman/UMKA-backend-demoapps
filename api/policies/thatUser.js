module.exports = (req, res, next) => {
    // if (req.params.id && req.params.id && (req.user.id == req.params.id)) {
    //     return next();
    // } else {
    //     return res.sError({ code: 10 });
    // }
    if (req.params.id || req.params.parentid) {
        let uid = req.params.parentid || req.params.id;
        if (req.user.id == uid || req.user.isAdmin) {
            return next();
        } else {
            sails.log.debug('thatUser id fail url (', req.method.toUpperCase(), '): ', req.url);
            return next({ message: 'fail thatUser policy id' });
        }
    } else {
        if (req.user.isAdmin) {
            return next();
        } else {
            return next({ message: 'fail thatUser policy general' })
        }
    }
}