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

   
    
}

function buscarCliente(req,res){
    //Array temporária contendo os clientes 

    const clientes = [
        {
            id: 1, 
            nome: "Carlos"
        },

        {
            id: 2,
            nome: "Maria"
        },

        {
            id: 3, 
            nome: "João"
        }
    ];

    //Pega o id recebido pela URL e transforma em Number
    const id = Number(req.params.id);

    //Procura no array o cliente que possui o mesmo Id 
    const clienteEncontrado = clientes.find((cliente) => {
        return cliente.id === id;
    });

    //Se nenhum cliente for encontrado 
    if(!clienteEncontrado){
        
        //Retorna http 404 e encerra a função 
        return res.status(404).json({
            mensagem: "Cliente não encontrado"
        });

    } 

    //Se encontrou, retorna os dados do cliente
    return res.json(clienteEncontrado);


}

 //Exporta a função
    module.exports = {
        listarClientes,
        buscarCliente
    };