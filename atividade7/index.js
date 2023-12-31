const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));

let dadosPessoais = {};
let dadosConsulta = {};

app.get("/", function (req, res) {
    res.render("formulario.html");
});

app.post('/dados', function (req, res) {
    dadosPessoais = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        data_nascimento: req.body.data_nascimento,
        endereco: req.body.endereco,
        uf: req.body.uf,
        cep: req.body.cep,
        email: req.body.email,
        telefone: req.body.telefone
    };

    dadosConsulta = {
        especialidade: req.body.especialidade,
        data_consulta: req.body.data_consulta,
        hora_consulta: req.body.hora_consulta,
        antibioticos: req.body.antibioticos,
        analgesicos: req.body.analgesicos,
        anti_inflamatorios: req.body.anti_inflamatorios,
        anticonvulsivantes: req.body.anticonvulsivantes,
        informacoes_adicionais: req.body.informacoes_adicionais
    };

    const erros = {};

    const camposConsulta = ['especialidade', 'data_consulta', 'hora_consulta'];
    for (const key of camposConsulta) {
        if (!req.body[key]) {
            erros.push(`${key} não pode estar vazio.`);
        }
    }

    const camposPessoais = ['nome', 'cpf', 'data_nascimento', 'endereco', 'uf', 'cep', 'email', 'telefone'];
    for (const key of camposPessoais) {
        if (!req.body[key]) {
            erros.push(`${key} não pode estar vazio.`);
        }
    }

    res.redirect('dados.html', { dadosPessoais, dadosConsulta, erros});
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('App rodando na porta ' + PORT);
});
