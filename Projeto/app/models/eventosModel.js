var db = require('../../config/db.js');

module.exports = function () {
    this.all = function (retorno) {
        var con = db();
        return con.query('select *from categorias', retorno);
    };

    this.save = function (dados, retorno) {
        var con = db();
        return con.query('insert into categorias set ?',dados, retorno);
    };

    return this;
};