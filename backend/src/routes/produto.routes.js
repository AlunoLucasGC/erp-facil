//Importa a biblioteca express
const express = require("express");

//Cria um roteador
const router = express.Router();

//Importa o Controller
const produtoController = require("../controllers/produto.controller");

//Quando acessar GET /produtos,
//Execute listarProdutos()
router.get("/",produtoController.listarProdutos);

//Permite que outro arquivo utilize esse router
//Disponibiliza para outros arquivos
module.exports = router;