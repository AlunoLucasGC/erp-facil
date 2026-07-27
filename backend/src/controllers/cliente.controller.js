//req - Tudo o que o navegador enviou
//res - resposta que é enviada ao navegador
function listarClientes(req,res){

    //Variável que guarda um vetor
    const clientes = [
        {
            id: 1, 
            nome: "Lucas"
        },
        {
            id: 2,
            nome: "Maria"
        }
    ];

    //Envia o vetor para o navegador em formato JSON
    res.json(clientes)

    //Exporta a função
    module.exports = {
        listarClientes
    };
    
}