const pwdgen = require('generate-password');
/**
 * length - длинна возвращаемого кода
 */
module.exports = function (length) {
    return pwdgen.generate({
        length: length,
        numbers: true,
        symbols: false,
        uppercase: false,
        strict: false,
        exclude: 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    });
}