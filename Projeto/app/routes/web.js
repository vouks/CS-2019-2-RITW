var contaModel = require('../models/contaModel')();
var eventosControllers = require('../controllers/eventosControllers');

module.exports = function (app) {
    app.get('/login', function (req, res) {
        res.render('site/login')
    });

    app.get('/criarConta', function (req, res) {
        res.render('site/criarConta');
    });

    app.get('/home', function (req, res) {
        res.render('site/home');
    });

    app.get('/eventos/', function (req, res) {
        eventosControllers.index(req,res);
    });

    app.post('/eventos/add', function (req, res) {
        eventosControllers.store(req,res);
    });

    app.get('/eventos/add', function (req, res) {
        res.render('admin/addeventos');
    });
};