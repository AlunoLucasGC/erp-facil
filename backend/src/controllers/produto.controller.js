//req - Tudo o que o navegador enviou
//res - Resposta que é enviada ao navegador

//*====================================
//*DADOS TEMPORÁRIOS
//*====================================

//Variável que guarda um vetor
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

//*==================================
//*LISTAR PRODUTOS
//*==================================

//req - Tudo o que o navegador enviou
//res - resposta enviada ao navegador
function listarProdutos(req,res){

    //Envia o vetor para o navegador em formato JSON
   return res.json(produtos);

}

//*==================================
//*BUSCAR PRODUTOS
//*==================================

//req - Tudo o que o navegador enviou 
//res - resposta enviada ao navegador
function buscarProduto(req,res){

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

//*==================================
//*LISTA PRODUTOS EM ESTOQUE BAIXO
//*==================================

//req - Tudo o que o navegador enviou
//res- Resposta enviada ao navegador
function listarEstoqueBaixo(req,res){

    //filter() procura produtos com estoque menor ou igual a 5 e
    // retorna um array
    const EstoqueBaixo = produtos.filter((produto) => {
          return produto.estoque <= 5
});
    //Envia o vetor para o navegador em formato Json
   return res.json(EstoqueBaixo);

}


//*======================
//*EXPORTA A FUNÇÃO
//*======================

 //Exporta a função 
    module.exports={
        listarProdutos,
        buscarProduto,
        listarEstoqueBaixo
    };