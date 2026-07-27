//req - Tudo o que o navegador enviou
//res - Resposta que é enviada ao navegador
function listarUsuarios(req,res){

    //Variável que guarda o vetor
    const usuarios = [
        {
            id: 1,
            nome: "Pedro"
        },
        {
            id: 2,
            nome: "Lisa"
        }
    ];

    //Envia o vetor para o navegador em formato JSON
    res.json(usuarios)

    //Exporta a função
    module.exports = {
        listarUsuarios
    };

}