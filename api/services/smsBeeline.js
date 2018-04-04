const https = require('https');
const zlib = require('zlib');
const qstr = require('querystring');
const xml = require('xml2js').parseString;
// const util = require('util');


module.exports = {
    send: (phone, code) => {
        return new Promise((resolve, reject) => {
            let data = {
                user: "xxx",
                pass: "xxx",
                action: "post_sms",
                message: code,
                target: phone,
                sender: "xxx"
            }
            let options = {
                hostname: 'beeline.amega-inform.ru',
                path: '/sendsms/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': Buffer.byteLength(qstr.stringify(data))
                },
            };
            let req = https.request(options, res => {
                res.pipe(zlib.createGunzip()).on('data', (answer) => {
                    xml(answer, (err, parsed) => {
                        if (err) {
                            reject('ошибка в парсе')
                            // console.log('err \n', err);
                        } else {
                            // console.log(util.inspect(parsed, false, null))
                            if (parsed.output.result && parsed.output.result.length > 0) {
                                resolve(true);
                                // console.log('sended');
                                // console.log(util.inspect(parsed.output.result, false, null))
                            } else {
                                reject('ошибка отправки');
                                // console.log('error');
                                // console.log(util.inspect(parsed.output.errors, false, null))
                            }
                        }
                    });
                })
                // res.on('end', () => {
                //     // console.log('end');
                // })
            })
            // console.log('REQUEST \n', req);
            req.write(qstr.stringify(data));
            req.end();
        })
    }
}
