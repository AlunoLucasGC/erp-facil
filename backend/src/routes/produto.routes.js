const express = require("express");//*Importa a biblioteca express

const router = express.Router();

//Listar produtos 
router.get("/",(req, res )=>
{
    res.json({
        mensagem: "Lista de Produtos"
    })
})

module.exports = router;