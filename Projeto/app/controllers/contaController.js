var contaModel = require('../models/contaModel')();

module.exports.index = function (req, res) {
    contaModel.all(function (erro, resultado) {
        res.render('site/home', { conta: resultado, erros: {}, dados: {} });
    });
};

module.exports.store = function (req, res) {
    var dados = req.body;

    req.assert('nome', 'Preencha um Nome').notEmpty();
    req.assert('nome', 'Nome deve ter de 2 a 50 caracteres').len(2, 20);
    req.assert('email', 'Preencha um e-mail válido').isEmail();
    req.assert('email', 'Preencha um e-mail').notEmpty();

    var validacaoErros = req.validationErrors();

    if (validacaoErros) {
        console.log(validacaoErros);
        contaModel.all(function (erro, resultado) {
            res.render('site/criarConta', { conta: resultado, erros: validacaoErros, dados: dados });
        });
        return;
    }

    contaModel.save(dados, function (erro, resultado) {
        if (!erro) {
            res.redirect('/login');
        } else {
            console.log("Erro ao criar a conta.");
        };
    });
};

module.exports.show = function () {

};
