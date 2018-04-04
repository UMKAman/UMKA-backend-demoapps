/**
 * 500 (Server Error) Response
 *
 * Usage:
 * return res.serverError();
 * return res.serverError(err);
 * return res.serverError(err, 'some/specific/error/view');
 *
 * NOTE:
 * If something throws in a policy or controller, or an internal
 * error is encountered, Sails will call `res.serverError()`
 * automatically.
 */

module.exports = function sError(data, options) {

    // Get access to `req`, `res`, & `sails`
    var req = this.req;
    var res = this.res;
    var sails = req._sails;

    // Set status code
    res.status(500);

    switch (data.code) {
        case 0:
            res.status(400);
            return res.send('Ошибка параметров');
            break;
        case 1:
            res.status(404);
            return res.send('неверный код СМС');
            break;
        case 2:
            res.status(404);
            return res.send('не найдена запись для проверки СМС');
            break;
        case 3:
            res.status(400);
            return res.send('Format is Authorization: Bearer <token>');
            break;
        case 4:
            res.status(400);
            return res.send('No Authorization header was found');
            break;
        case 5:
            res.status(417);
            return res.send('Invalid token');
            break;
        case 6:
            res.status(424);
            return res.send('Not Master');
            break;
        case 7:
            res.status(424);
            return res.send('Not User');
            break;
        case 8:
            res.status(400);
            return res.send('User doesn\'t exist');
            break;
        case 8:
            res.status(400);
            return res.send('Auth User code verification fail');
            break;
        case 9:
        case 10:
            res.status(403);
            return res.send('запрещено');
            break;
        case 11:
            res.status(401);
            return res.send('Not authed');
            break;
        default:
            sails.log.debug("ERROR: ", data);
            return res.send('general exception');
            break;
    }
};

