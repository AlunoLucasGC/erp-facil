const express = require("express"); //* Importa a biblioteca express 

const app = express(); //* Criação da aplicação

const routes = require("./routes");

app.use(routes); //* O express utilizará todas as rotas definidas no arquivo routes/index.js                    

module.exports = app; //*Disponibiliza a aplicação para que outro arquivo possa utilizá-la