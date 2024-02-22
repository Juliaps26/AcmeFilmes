/******************************************************************************************************************************
 * Objetivo: Arquivo responsavel pela validação, consistencia de dados das requisições da API de filme
 * Data: 01/02/2024
 * Autor: Júlia
 * Versão: 1.0
 *
 *****************************************************************************************************************/

// Import
const message = require('../modulo/config.js')






// Import do arquivo DAO que fará comunicação como Banco de Dados 
const filmeDAO = require('../modulo/DAO/filme.js');



// Função para validar e inserir um novo filme 
// Quando houver solicitação de dados set
// async - tempo de processamento

const setInserirNovoFilme = async function () {

}

// Função para validar e atualizar um filme

const setAtualizarFilme = async function () {

}

// Função para excluir um filme
const setExcluirFilme = async function () {

}
// Função para retornar todos os filmes
const getListarFilmes = async function (id) {
// Criando objeto JSON  
    let filmesJSON = {};
    // Chama a função do DAO para retornar os dados da tabela de Filme
    let dadosFilmes = await filmeDAO.selectAllFilmes();

    // Validação para verificar se existem dados
    if (dadosFilmes) {
        // Criando o JSON para devolver o APP 
        filmesJSON.filmes = dadosFilmes;
        filmesJSON.quantidade = dadosFilmes.length;
        filmesJSON.status_code = 200;
        return filmesJSON;
    } else {
        // Se caso não vier o conteúdo
        return false;
    }


}
// Função para buscar um filme pelo ID
const getBuscarFilme = async function (id) {

// Recebe o ID do filme
    let idFilme = id;
    let filmesJSON = {

    }

// Cria o objeto JSON
    if(idFilme == '' || idFilme == undefined || isNaN(idFilme)){
        return message.ERROR_INVALID_ID;
    }else{
        // Encaminha o ID para o DAO buscar no banco de dados 
        let dadosFilme = await filmeDAO.selectByIdFilme(idFilme);
        // Verifica se o DAO retornou dados
        if(dadosFilme){

            // Validação para verificar a quantidade de itens retornados
            if(dadosFilme.length > 0){
                 // Cria o JSON para retorno
            filmesJSON.filme = dadosFilme;
            filmesJSON.status_code = 200;

            return filmesJSON;
            }else{
                // Se não for verdadeiro retorna o not found 404
                return message.ERROR_NOT_FOUND;
            }
           
        }else{
            return message.ERROR_INTERNAL_SERVER_DB  //500
        }
    }

}


//Exportar
module.exports = {
    setInserirNovoFilme,
    setAtualizarFilme,
    setExcluirFilme,
    getListarFilmes,
    getBuscarFilme
}