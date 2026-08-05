//req - Tudo o que o navegador enviou
//res - Resposta que é enviada ao navegador
function listarProdutos(req,res){

    //Variável que guarda um vetor
    const produtos = [
        {
            id: 1,
            nome: "Arroz"
        },
        {
            id: 2,
            nome: "Feijão"
        }
    ];

    //Envia o vetor para o navegador em formato JSON
    res.json(produtos);

}

 //Exporta a função 
    module.exports={
        listarProdutos
    };