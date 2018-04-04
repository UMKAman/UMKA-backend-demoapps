module.exports = (req, res, next) => {
    let token;
    if (req.headers && req.headers.authorization) {
        let parts = req.headers.authorization.split(' ');
        if (parts.length == 2) {
            let scheme = parts[0];
            let credentials = parts[1];
            if (/^Bearer$/i.test(scheme)) {
                token = credentials;
            }
        } else {
            return res.sError({ code: 3 });
        }
    } else {
        return res.sError({ code: 4 });
    }

    jwToken.verify(token, function (err, token) {
        if (err) {
            return res.sError({ code: 5 });
        }
        User.findOne({ id: token.id })
            .then(data => {
                if (data) {
                    req.user = data;
                    if (data.isMaster) {
                        return Master.findOne({ user: data.id });
                    } else {
                        return null;
                    }
                } else {
                    throw { code: 7 };
                }
            }).then(master => {
                req.master = master;
                return next();
            }).catch(error => {
                return res.sError(error);
            })
    })
}