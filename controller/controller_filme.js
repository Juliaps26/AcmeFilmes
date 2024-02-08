/******************************************************************************************************************************
 * Objetivo: Arquivo responsavel pela validação, consistencia de dados das requisições da API de filme
 * Data: 01/02/2024
 * Autor: Júlia
 * Versão: 1.0
 *
 *****************************************************************************************************************/

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
const getListarFilmes = async function () {
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
const getBuscarFilme = async function () {

}


//Exportar
module.exports = {
    setInserirNovoFilme,
    setAtualizarFilme,
    setExcluirFilme,
    getListarFilmes,
    getBuscarFilme
}