const express = require("express"); //* Importa a biblioteca express

const router = express.Router(); //* Separa as rotas em arquivos diferentes

//* Quando alguém acessar com a rota "/" com o método GET, executa a função
//Req (Request) - contém tudo o que o cliente enviou
//Res (Response) - Resposta que o servidor envia de volta
//res.json envia um objeto JSON(Formato mais usado para comunicação entre frontend e backend)
router.get("/", (req,res)=>{
    res.json({
        mensagem: "Bem vindo à API do ERP fácil!"
    });
});

module.exports= router;//Disponibiliza as rotas