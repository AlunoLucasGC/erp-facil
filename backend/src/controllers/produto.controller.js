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

function buscarProduto(req,res){

    const produtos = [
        {
            id: 1,
            nome: "Arroz",
            estoque: 2,
            preco: 20.00
        },
        {
            id: 2,
            nome: "Feijão",
            estoque: 5,
            preco: 25.00
        },

        {
            id: 3,
            nome: "Picanha",
            estoque: 10,
            preco: 70.00
        }
        
    ];

    //Pega o Id e transforma em Number
    const id = Number(req.params.id);

    //Procura no array o produto que possui o mesmo ID 
    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === id;

    });

    //Se nenhum produto for encontrado 
    if(!produtoEncontrado){
        
        //Retorna http 404 e encerra a função 
        return res.status(404).json({
            mensagem: "O produto não existe"
        });
    }

    //Retorna o produto encontrado, caso exista
    return res.json(produtoEncontrado);
}

 //Exporta a função 
    module.exports={
        listarProdutos,
        buscarProduto
    };