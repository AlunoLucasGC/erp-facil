const app = require("./src/app");

const PORT = 3000;

//*O servidor começa a ouvir conexões na porta 3000
app.listen(PORT,()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);

})

