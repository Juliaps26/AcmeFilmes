/**
 * Para realizar o acesso ao Banco de Dados precisamos instalar algumas bibliotecas:
 * - SEQUELIZE - uma biblioteca mais antiga ela tem bastante documentação porém a uns bugs que foram corrigidos  nos outros
 * - PRISMA ORM - mais atual
 * - FASTFY ORM - mais atual
 * 
 *   -- Para instalar o PRISMA:
 * - npm install prisma --save   (Irá reaalizar a conexão com BD)
 * - npm install @prisma/client --save   (Irá executar os scripts SQL no BDinit)
 * 
 *  -- Após a instalação das bibliotecas, devemos inicializar o prisma no projeto:
 * - npx prisma init
 * 
 * -- DataBase: db_filmes_turma_bb
 * 
 * -- APP fala com a controller e a controller com a model
 * -- Comeca pela model faz a função, depois a controller e depois o app
 *
 */


// Import da biblioteca para criar a API

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Cria um objeto app tendo como referencia a classe do express
const app = express();
app.use((request,response,next) => {
    response.header('Acess-Control-Allow-Origin','*');
    response.header('Acess-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
    app.use(cors())
    next();

})

/**Import dos arquivos da controller do projeto **/

const controllerFilmes = require('./controller/controller_filme.js');


/**************************************************/
// Criando um objeto para controlar a chegada dos dados ada requisição em formato JSON
const bodyParserJSON = bodyParser.json();

// app get

// Trata a solicitação, obtedo a lista de filmes 'Get filmes', se a lista exisitir é
// enviada como resposa em formato de JSON com o status 200 (OK) e se não existir é
//  enviado um sttaus 404 (não econtrado)
app.get('/v1/acmefilmes/filme',cors(),async function(request,response,next){
    let controleFilmes=require('./controller/funcoes')
    let listaFilmes=controleFilmes.getFilmes()
    if(listaFilmes){
        response.json(listaFilmes)
        response.status(200)
    }
    else{
        response.status(404)
    }
})

app.get('/v1/acmefilmes/filme/:idUsuario',cors(),async function(request,response,next){
    let idFilme=request.params.idUsuario
    let controleFilmes=require('./controller/funcoes')
    let dadosFilme=controleFilmes.getFilmesID(idFilme)
    if(dadosFilme){
        response.json(dadosFilme)
        response.status(200)
    }
    else{
        response.status(404)
    }
})

// End Point - Versão 1.0 - retorna todos os filmes do arquivo filmes.js
// app.get('/v1/acmefilmes/filmes', cors(), async function(request, response){

// });


// End Point - Versão 2.0 - retorna todos os filmes do Banco de dados

app.get('/v2/acmefilmes/filmes', cors(), async function(request, response){

// Chama a função da controller para retornar os filmes
    let dadosFilmes = await controllerFilmes.getListarFilmes();
    response.status(dadosFilmes.status_code)
    response.json(dadosFilmes)

});


// End point: Retorna o filme filtrando pelo ID
 app.get('/v2/acmeFilmes/filme/:id', cors(), async function(request, response){
    // Recebe o ID da requisição
    let idFilme= request.params.id
    // Encaminha o ID para a controller buscar o filme
    let dadosFilme = await controllerFilmes.getBuscarFilme(idFilme)
    response.status(dadosFilme.status_code);
    response.json(dadosFilme);
 })


 // End point: Retornar os filmes pelo nome e arrumar na padronização
 app.get('/v2/acmefilmes/filmes/filme', cors(), async function(request,response){
    let nomeFilme=request.query.nome
    let dadosFilmes=await controllerFilmes.getBuscarFilmePeloNome(nomeFilme)
    response.status(dadosFilmes.status_code)
    response.json(dadosFilmes)
 })

// Implementação do POST 
 app.post('/v2/acmefilmes/filme', cors(), bodyParserJSON, async function(request, response){

    // Recebe o content-type com o tipo de dados encaminhado na requisição
    let contentType = request.headers['content-type'];

    // Recebe todos os dados encaminhados na requisição pelo body
    let dadosBody = request.body;

    // Encaminha os dados para a controller enviar para o DAO
    let resultDadosNovoFilme = await controllerFilmes.setInserirNovoFilme(dadosBody,contentType);

    response.status(resultDadosNovoFilme.status_code);
    response.json(resultDadosNovoFilme)
 })

 // Excluir um filme através do id 
 app.delete('/v2/acmeFilmes/deletefilme/:id', cors(), async function(request, response){
    let idFilme= request.params.id
    let filmeExcluido= await controllerFilmes.setExcluirFilme(idFilme)
    response.status(filmeExcluido.status_code)
    response.json(filmeExcluido)

 })


 app.put('/v2/acmeFilmes/updateFilme/:id', cors(), async function(request,response){

    let idFilme = request.params.id
    let contentType=request.headers['content-type']
    let dadosBody=request.body
    let atualizacaoNovoFilme=

 })


// Executa a API e faz ela ficar aguardando requisições
app.listen('8080',function(){
    console.log('API funcionando!')
})




