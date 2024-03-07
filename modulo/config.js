// Arquivo responsável pela padronização de variáveis globais utilizadas no projeto
// Data: 22/02/2024
// Autor: Júlia
// Versão; 1.0


// MENSAGENS DE ERRO

const ERROR_INVALID_ID = {status: false, status_code: 400, message: 'O ID encaminhado na requisão não é valido'}
const ERROR_REQUIRED_FIELDS  = {status: false, status_code:400, message: 'Existem campos requiridos que não foram preenchidos, ou não atendem aos critérios de digitação !!'}
const ERROR_NOT_FOUND = {status: false, status_code: 404, message: 'Não foram encontrados itens na requisição'}
// Para um erro de banco
const ERROR_INTERNAL_SERVER_DB = {status: false, status_code: 500, message: 'Não foi possivel acessar a requisição devido a um problema na comunicação com o banco de dados. Contate o Adminstrador da API'}

// MENSAGENS DE SUCESSO 

const SUCCESS_CREATED_ITEM = {status: true, status_code: 201, message: 'Item criado com sucesso !!!'}


// exportar as const

module.exports={
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND,
    ERROR_INTERNAL_SERVER_DB,
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATED_ITEM
}