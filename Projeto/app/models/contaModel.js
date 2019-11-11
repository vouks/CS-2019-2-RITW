var db = require('../../config/db');

module.exports = function () {
    this.all = function (retorno) {
        var con = db();
        return con.query('select *from conta', retorno);
    };

    this.save = function (dados, retorno) {
        var con = db();
        return con.query('insert into conta set ?', dados, retorno);
    };

    return this;
};