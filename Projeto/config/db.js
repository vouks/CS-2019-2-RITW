var mysql = require('mysql');

var con = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'testeusuario123',
        database: 'cuso_node',
        multipleStatements : true
    });
};


module.exports = con;