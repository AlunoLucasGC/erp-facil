//Importa o Express()
const express = require("express"); 

//Cria um roteador
const router = express.Router();

//Importa o controller
const clienteController = require("../controllers/cliente.controller");

//Quando acessar GET /clientes,
//Execute listarClientes()
router.get("/",clienteController.listarClientes);

//Permite que outro arquivo utilize esse router
//Disponibiliza para outros arquivos
module.exports = router;
