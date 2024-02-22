// Arquivo responsável pela padronização de variáveis globais utilizadas no projeto
// Data: 22/02/2024
// Autor: Júlia
// Versão; 1.0


// MENSAGENS DE ERRO

const ERROR_INVALID_ID = {status: false, status_code: 400, message: 'O ID encaminhado na requisão não é valido'}
const ERROR_NOT_FOUND = {status: false, status_code: 404, message: 'Não foram encontrados itens na requisição'}
// Para um erro de banco
const ERROR_INTERNAL_SERVER_DB = {status: false, status_code: 500, message: 'Não foi possivel acessar a requisição devido a um problema na comunicação com o banco de dados. Contate o Adminstrador da API'}





// exportar a const

module.exports={
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND,
    ERROR_INTERNAL_SERVER_DB

}