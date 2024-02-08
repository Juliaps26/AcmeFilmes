/******************************************************************************************************************************
 * Objetivo: Arquivo responsavel pelo acesso ao Banco de dados MySQL, aqui faremos o CRUD na tabela de filme
 * Data: 01/02/2024
 * Autor: Júlia
 * Versão: 1.0
 *
 *****************************************************************************************************************/
// Criando variavel global 
// Import da biblioteca do prisma client para manipular scripts SQL
const { PrismaClient } = require('@prisma/client');

// Instancia da classe PrismaClient
const prisma = new PrismaClient();



// Criando funções - sempre na model usar as palavras de scipt

// Função para inserir um novo filme no banco de dados 
// async 
const insertFilme = async function () {

}

// Função para atualizar um filme no banco de dados 
const updateFilme = function () {

}

// Função para excluir um filme no banco de dados 
const deleteFilme = async function () {

}

// Função para listar todos os filmes do banco de dados
// all - todos 
const selectAllFilmes = async function () {
    // Criar uma variavel para montar meu script SQL para o banco de dados
    let sql = 'select * from tbl_filme';

    // Query - SELECT (tem retorno de dados)
    // Execute - INSERT, UPDATE E DELETE (não tem retorno de dados)
    // rs - result

    // usamos o RawUnsafe para mandar a variavel
    // Vai executar a funcao e esperar (await) o resultado do Banco
    // Executa o script SQL no BD e recebe o retorno de dados 
    let rsFilmes = await prisma.$queryRawUnsafe(sql)
    // $queryRawUnsafe(sql)
    // $queryRaw('select * from tbl_filme')

    // Validação para retornar os dados 
    if (rsFilmes.length > 0)
        return rsFilmes;
    else
        return false;

}

// Função para buscar um filme no banco de dados filtrando pelo ID
const selectByIdFilme = async function () {

}

// Exportar todas as funções para a controller
module.exports = {
    insertFilme,
    updateFilme,
    deleteFilme,
    selectAllFilmes,
    selectByIdFilme
}