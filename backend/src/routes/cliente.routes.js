const express = require("express");

const router = express.Router();


//Listar Clientes
router.get("/", (req,res)=>{
    res.json({
        mensagem: "Lista de clientes"
    });

});

module.exports = router;