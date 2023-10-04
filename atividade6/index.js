const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.render("agendamento.html");
});

app.post('/dados', function(req, res) {
    let usuario = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        data: req.body.data
    };

    let erro_form = false;

    if(usuario.nome == ""){
        erro_form = true;
    }
    if(usuario.endereco == ""){
        erro_form = true;
    }
    if(usuario.telefone == ""){
        erro_form = true;
    }
    if(usuario.data == ""){
        erro_form = true;
    }

    res.render('dados.html', {usuario, erro_form});
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});