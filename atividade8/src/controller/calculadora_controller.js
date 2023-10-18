const calculadora = require('../calculadora/calculadora');

function index_calculadora(req, res){
    res.render('calculadora.html');
};

function calcular(req, res){
    res.send(calculadora.somar());
};

module.exports = {
    index_calculadora,

};