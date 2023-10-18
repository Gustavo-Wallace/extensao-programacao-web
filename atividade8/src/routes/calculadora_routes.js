const express = require('express');
const router = express.Router();

const calculadora_controller = require('../controller/calculadora_controller');

router.get('/', calculadora_controller.index_calculadora);
router.post("/calcular", calculadora_controller.calcular);

module.exports = router;

