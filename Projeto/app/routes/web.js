var contaController = require('../controllers/contaController');

module.exports = function (app) {
    app.get('/login', function (req, res) {
        res.render('site/login');
    });

    app.get('/criarconta', function (req, res) {
        res.render('site/criarConta');
    });

    app.get('/', function (req, res) {
        contaController.index(req, res);
    });

    app.post('/criarConta', function (req, res) {
        contaController.store(req, res);
    });
};