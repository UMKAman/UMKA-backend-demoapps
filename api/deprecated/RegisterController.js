/**
 * RegisterController
 *
 * @description :: Server-side logic for managing registers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * 
     * @api {post} /register Регистрация пользователя
     * @apiName userSMSRequest
     * @apiGroup Register
     * @apiVersion  0.1.0
     * 
     * 
     * @apiParam  {String} phone номер телефона для регистрации на который отправить СМС
     * 
     * @apiSuccess (200) {type} name description
     * 
     * @apiParamExample  {type} Request-Example:
       {
           phone : "+79998887766"
       }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
       {
       }
     * 
     * 
     */
    /**
     * 
     * @api {post} /register Проверка кода СМС
     * @apiName userCheckSMS
     * @apiGroup Register
     * @apiVersion  0.1.0
     * 
     * 
     * @apiParam  {String} phone номер телефона
     * @apiParam  {String} code код СМС
     * @apiParam  {String} device информация об устройстве
     * 
     * @apiSuccess (200) {string} jwt jwt-token for use
     * 
     * @apiParamExample  {type} Request-Example:
       {
           phone : "+79998887766",
           code : "2233",
           device: "iOS from Kandagar"
       }
     * 
     * 
     * @apiSuccessExample {type} Success-Response:
       {
           "jwt" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDkzNjI4Mzg1fQ.L9Dci-cIBuybcX6OYIJbNBjgMla9Cw8yJ-V86CaX0CY"
       }
     * 
     * 
     */
    main: (req, res, next) => {
        if (req.body && req.body.code && req.body.phone && req.body.device) {
            //check code:
            Sms.checkCode(req.body.phone, req.body.code).then(() => {
                return User.create({
                    phone: req.body.phone
                });
            }).then(created => {
                return Jwt.create({
                    user: created.id,
                    jwt: jwToken.issue({ id: created.id }),
                    device: req.body.device
                });
            }).then(jwt => {
                return res.json(jwt.jwt);
            }).catch(err => {
                return res.sError(err);
            })
        } else if (req.body && req.body.phone) {
            Sms.create({ phone: req.body.phone, code: codegen(4) }).then(created => {
                return smsBeeline.send(created.phone, created.code);
            }).then(() => {
                res.status(201);
                return res.send();
            }).catch(err => {
                return res.sError(err);
            })
        } else {
            return res.sError({ code: 0 });
        }
    }
};

