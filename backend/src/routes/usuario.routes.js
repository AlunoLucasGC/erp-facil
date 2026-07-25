const express = require("express") //* Importa as bibliotecas do express

const router = express.Router(); //* Separa as rotas em arquivos diferentes

//Listar usuários
router.get("/",(req,res) => {
    res.json({
         mensagem: "Lista de usuários"
    })
   
});

module.exports = router;
