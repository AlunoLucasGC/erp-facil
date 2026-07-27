//Importa as bibliotecas do express
const express = require("express") 

//Cria um roteador
const router = express.Router();

//Importa o controller
const usuarioController = require ("../controllers/usuario.controller");

//Quando acessar GET /usuarios
//Execute listarUsuarios()
router.get("/", usuarioController.listarUsuarios)

//Permite que outro arquivo utilize esse router
//Disponibiliza para outros arquivos
module.exports = router;
