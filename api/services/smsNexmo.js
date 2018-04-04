const https = require('https');
const zlib = require('zlib');
const qstr = require('querystring');
const xml = require('xml2js').parseString;
// const util = require('util');

const Nexmo = require('nexmo');

module.exports = {
    send: (phone, code) => {
        return new Promise((resolve, reject) => {
            var nexmo = new Nexmo({
                apiKey: 'xxx',
                apiSecret: 'xxx',
            });
            nexmo.message.sendSms('xxx', phone, code, {}, (err, result) => {
                if (err) return reject(err);
                return resolve();
            });
        })
    }
}
