const jwt = require('jsonwebtoken');
const tokenSecret = "umka-test"; //todo change secret

module.exports = {
    issue: function (payload) {
        var tokens = {};
        token = jwt.sign(
            payload,
            tokenSecret
        );
        return token;
    },
    verify: function (token, callback) {
        return jwt.verify(
            token,
            tokenSecret,
            {},
            callback
        );
    },
}