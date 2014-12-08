var path = require('path')
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db:'mongodb://localhost/multivision',
        port: process.env.port || 3030
    },
    production: {
        rootPath: rootPath,
        db:'mongodb://dharris:multivision@ds061200.mongolab.com:61200/multivisiondemo',
        port: process.env.PORT || 80
    }
}