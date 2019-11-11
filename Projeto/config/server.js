module.exports = function () {
    var express = require('express');
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');

    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use('/public', express.static('public'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(expressValidator());

    var rotas = require('../app/routes/web');
    rotas(app);

    app.listen(8000, function () {
        console.log("Para maiores informações acesse localhost:8000");
    });
};