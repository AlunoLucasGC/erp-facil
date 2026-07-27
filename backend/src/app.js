const express = require("express"); //* Importa a biblioteca express 

const app = express(); //* Criação da aplicação

const clienteRoutes = require("./routes/cliente.routes");//Importa o arquivo cliente.routes.js
const produtoRoutes = require ("./routes/produto.routes");//Importa o arquivo produto.routes.js
const usuarioRoutes = require("./routes/usuario.routes");//Importa o arquivo usuario.routes.js

app.use("/clientes", clienteRoutes); // Todas as rotas definidas em cliente.routes.js começam com /clientes
app.use("/produtos",produtoRoutes);// Todas as rotas definidas em produto.routes.js começam com /produtos  
app.use("/usuarios", usuarioRoutes);// Todas as rotas definidas em usuario.routes.js começam com /usuarios 

module.exports = app; //*Disponibiliza a aplicação para que outro arquivo possa utilizá-la
