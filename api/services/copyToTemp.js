const fs = require('fs');
module.exports = function (controllerName, fileName) {
    let pathToFile = sails.config.appPath + '/assets/pics/' + controllerName + '/' + fileName;
    let pathPutFile = sails.config.appPath + '/.tmp/public/pics/' + controllerName + '/' + fileName;
    fs.createReadStream(pathToFile).pipe(fs.createWriteStream(pathPutFile));
}