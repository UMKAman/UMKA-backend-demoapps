/**
 * AuthController
 *
 * @description :: Аутенфикация пользователя
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 * 
 * Ищем в базе указанный телефон, если он есть - создаем новый токен для нет, через подтверждение по СМС
 * 
 */
const bcrypt = require('bcrypt');

module.exports = {
    checkPhone: (req, res, next) => {
        if (!req.body || !req.body.phone) {
            return next('Not all parameters sent');
        }
        User.findOne({ phone: req.body.phone }).then(found => {
            if (found) return res.json({result: true});
            else return res.json({result: false});
        }).catch(err => {
            return next(err);
        })
    },
    registration: (req, res, next) => {
        if (!req.body || !req.body.phone || !req.body.password || !req.body.fireToken || !req.body.device) {
            return next('Not all parameters sent');
        }
        var currentUser;
        User.findOne({ phone: req.body.phone }).then(found => {
            if (found) throw new Error('User already exists');
            return User.create({ phone: req.body.phone, password: req.body.password });
        }).then(created => {
            currentUser = created;
            return Promise.all([
                Jwt.create({
                    user: created.id,
                    jwt: jwToken.issue({ id: created.id }),
                    device: req.body.device
                }),

                //todo Check that
                FireToken.findOrCreate({
                    token: req.body.fireToken,
                    user: created.id,
                    device: req.body.device,
                }, {
                        token: req.body.fireToken,
                        user: created.id,
                        device: req.body.device,
                    })
            ])
        }).spread((jwt, ft) => {
            return res.json({ jwt: jwt.jwt, user: currentUser });
        }).catch(err => {
            return next(err);
        })
    },
    remindPassword: (req, res, next) => {
        if (!req.body || !req.body.phone) {
            return next('Not all parameters sent');
        }
        let obj = {};
        User.findOne({ phone: req.body.phone }).then(found => {
            if (!found) throw new Error('User doesnt exists');
            return Sms.findOrCreate({ phone: req.body.phone }, { phone: req.body.phone })
        }).then(foc => {
            if (foc instanceof Array) foc = foc[0];
            obj = foc;
            obj.code = codegen(4);
            return obj.save();
        }).then(() => {
            return;
            // return smsNexmo.send(obj.phone, obj.code); //todo
        }).then(() => {
            res.status(201);
            // return res.ok();
            return res.json({ code: obj.code });
        }).catch(err => {
            return next(err);
        })
    },
    resetPassword: (req, res, next) => {
        if (!req.body || !req.body.phone || !req.body.password || !req.body.code || !req.body.device || !req.body.fireToken) {
            return next('Not all parameters sent');
        }
        var currentUser;
        Sms.checkCode(req.body.phone, req.body.code).then(() => {
            return User.update({ phone: req.body.phone }, { password: req.body.password });
        }).then(updated => {
            currentUser = updated[0];
            return Promise.all([
                Jwt.create({
                    user: currentUser.id,
                    jwt: jwToken.issue({ id: currentUser.id }),
                    device: req.body.device
                }),

                //todo Check that
                FireToken.findOrCreate({
                    token: req.body.fireToken,
                    user: currentUser.id,
                    device: req.body.device,
                }, {
                        token: req.body.fireToken,
                        user: currentUser.id,
                        device: req.body.device,
                    })
            ])
        }).spread((jwt, ft) => {
            return res.json({ jwt: jwt.jwt, user: currentUser });
        }).catch(err => {
            if (err.code == 2) {
                err = 'No sms found';
            }
            if (err.code == 1) {
                err = 'Wrong code';
            }
            return next(err);
        })
    },
    main: (req, res, next) => {
        if (!req.body || !req.body.phone || !req.body.password || !req.body.device || !req.body.fireToken) {
            return next('Not all params sent');
        }
        var currentUser;
        User.findOne({phone : req.body.phone}).then(found => {
            if (!found) throw 'User doesnt exists';
            currentUser = found;
            return bcrypt.compare(req.body.password, currentUser.password);
        }).then(result => {
            if (!result) throw 'Wrong password';
            return Promise.all([
                Jwt.create({
                    user: currentUser.id,
                    jwt: jwToken.issue({ id: currentUser.id }),
                    device: req.body.device
                }),

                //todo Check that
                FireToken.findOrCreate({
                    token: req.body.fireToken,
                    user: currentUser.id,
                    device: req.body.device,
                }, {
                        token: req.body.fireToken,
                        user: currentUser.id,
                        device: req.body.device,
                    })
            ])
        }).spread((jwt, ft) => {
            return res.json({ jwt: jwt.jwt, user: currentUser });
        }).catch(err => {
            return next(err);
        })
    },
    // main: function (req, res, next) {
    //     if (req.body && req.body.phone && req.body.code && req.body.device && req.body.fireToken) {
    //         let currentUser = {};
    //         Sms.checkCode(req.body.phone, req.body.code).then(() => {
    //             return User.findOrCreate({
    //                 phone: req.body.phone
    //             }, {
    //                     phone: req.body.phone
    //                 });
    //         }).then(createdOrFinded => {
    //             currentUser = createdOrFinded;
    //             return Promise.all([
    //                 Jwt.create({
    //                     user: createdOrFinded.id,
    //                     jwt: jwToken.issue({ id: createdOrFinded.id }),
    //                     device: req.body.device
    //                 }),

    //                 //todo Check that
    //                 FireToken.findOrCreate({
    //                     token: req.body.fireToken,
    //                     user: createdOrFinded.id,
    //                     device: req.body.device,
    //                 }, {
    //                         token: req.body.fireToken,
    //                         user: createdOrFinded.id,
    //                         device: req.body.device,
    //                     })
    //             ]);
    //         }).spread((jwt, ft) => {
    //             return res.json({ jwt: jwt.jwt, user: currentUser });
    //         }).catch(err => {
    //             return res.sError(err);
    //         })
    //     } else if (req.body && req.body.phone) {
    //         let obj = {};
    //         Sms.findOrCreate({ phone: req.body.phone }, { phone: req.body.phone }).then(foc => {
    //             obj = foc;
    //             obj.code = codegen(4);
    //             return obj.save();
    //         }).then(() => {
    //             return;
    //             // return smsBeeline.send(obj.phone, obj.code); //todo
    //         }).then(() => {
    //             res.status(201);
    //             return res.json({ code: obj.code });
    //         }).catch(err => {
    //             return res.sError(err);
    //         })
    //     }
    // }
};
    /**
     * 
     * @api {post} /auth Аутенфикация пользователя
     * @apiName userAuth
     * @apiGroup Auth
     * @apiVersion  0.1.0
     * 
     * 
     * @apiParam  {String} phone телефон
     * @apiParam  {String} code код-отправленный по СМС
     * @apiParam  {String} device информация о девайсе, к которому будет привязан токен
     * 
     * @apiSuccess (200) {string} jwt jwt token for use
     * 
     * @apiParamExample  {type} Request-Example:
       {
           phone : "+79998887766",
           code : "0234",
           device: "Android device"
           fireToken: fireToken девайса
       }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
       {
           "jwt" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDkzNjI4Mzg1fQ.L9Dci-cIBuybcX6OYIJbNBjgMla9Cw8yJ-V86CaX0CY",
           "user": { model.user }
       }
     * 
     * 
     */
    /**
     * 
     * @api {post} /auth Запрос СМС для проверки номера телефона для регистрации/нового устройства пользователя
     * @apiName userAuthRequest
     * @apiGroup Auth
     * @apiVersion  0.1.0
     * 
     * 
     * @apiParam  {String} phone телефон
     * 
     * @apiParamExample  {type} Request-Example:
       {
           phone : "+79998887766"
       }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
       {
            "code": "3244"
       }
     * 
     * 
     */

