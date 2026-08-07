//Importa a biblioteca express
const express = require("express");

//Cria um roteador
const router = express.Router();

//Importa o Controller
const produtoController = require("../controllers/produto.controller");

//Quando acessar GET /produtos,
//Execute listarProdutos()
router.get("/",produtoController.listarProdutos);

//Busca produtos com estoque baixo
router.get("/estoque-baixo", produtoController.listarEstoqueBaixo);

//Busca o produto por Id
router.get("/:id", produtoController.buscarProduto);

//Permite que outro arquivo utilize esse router
//Disponibiliza para outros arquivos
module.exports = router;