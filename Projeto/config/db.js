var mysql = require('mysql');

var con = function(){
return mysql.createConnection({
    host:'200.98.66.163',
    user:'cs_user',
    password:'pwd_user',
    database:'cs_db'
 });
};

module.exports = con;