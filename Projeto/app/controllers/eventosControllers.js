var eventosModel = require('../models/eventosModel')();

module.exports.index = function (req, res) {
    eventosModel.all(function (erro, resultado) {
        res.render('admin/eventos', { eventos: resultado, erros: {} });
    });
};

module.exports.store = function (req, res) {
    var dados = req.body;

    req.assert('nomeevento', 'Preencha um nome para o evento.').notEmpty();
    req.assert('tipoevento', 'Preencha um tipo para o evento.').notEmpty();
    req.assert('cidadeevento', 'Preencha uma cidade para o evento.').notEmpty();
    req.assert('estadoevento', 'Preencha um estado para o evento.').notEmpty();

    var validacaoErros = req.validationErrors();
    if (validacaoErros) {
        console.log(validacaoErros);
        eventosModel.all(function (erro, resultado) {
            res.render('admin/eventos', { eventos: resultado, erros: validacaoErros });
        });
        return;
    };

    eventosModel.save(dados, function (erro, resultado) {
        if (!erro) {
            console.log("Novo evento criado com sucesso.");
            res.redirect('/eventos');
        } else {
            console.log("Erro ao adicionar novo evento.");
            res.redirect('/eventos');
        };
    });
};

module.exports.show = function () {

};