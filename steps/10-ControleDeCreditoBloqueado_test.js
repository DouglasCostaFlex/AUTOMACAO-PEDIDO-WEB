// Feature('Controle de Credito Bloqueado').tag('CtcBloqueado');

// const { Pagina_Login_Wildfly1,
//     Pagina_Produto_16410_Wildfly1,
//     Pagina_Historico_Pedido_Wildfly1 ,
//     Pagina_Historico_Financeiro_Wildfly1,
//     Pagina_Login_Wildfly2 = '',
//     Pagina_Historico_Pedido_Wildfly2 = '',
//     Pagina_Historico_Financeiro_Wildfly2 = '',
//     Pagina_Produto_08070_Wildfly2 = '',
//     Pagina_Login_Wildfly3 = '',
//     Pagina_Historico_Pedido_Wildfly3 = '',
//     Pagina_Historico_Financeiro_Wildfly3 = '',
//     Pagina_Produto_08070_Wildfly3 = '',
// } = require("../pages/LinksExternos");

// const { Login } = require("../pages/login_page");
// const { I } = inject()

// //DADOS DE ACORDO COM O QUE PRECISO NA ABA INICIAL 
// // CLIENTE 51668 LUZZA COMERCIO E INSTALADORA
// const CNPJ_CORRETO = '23.928.274/0001-40'
// const SENHA_CORRETA = '48303523'

// const { Client } = require('pg');

// const client = new Client({
//     user: 'flextotal',
//     host: '192.168.1.3',
//     database: 'rezzadori_automacao',
//     password: 'Fl3xt0t@L',
//     port: 5432,
// });

// Before(() => {

//     //AQUI SEMPRE ELE DA O COMANDO SQL PARA DEIXAR A DESCRICAO 1 E NAO FECHO A CONEXAO
//     client.connect()
//         .then(() => {
//             console.log('Conexão estabelecida com sucesso!');

//         })
//         .catch((err) => {
//             console.error('Erro ao conectar ao banco de dados:', err);
//         });

// })


// Scenario('Controle de crédito Bloqueado ', () => {

//     // DESATIVO O CLIENTE
//     client.query(" update cliente set fl_situacao_credito = '0' where cd_cliente = '51668'")
//         .then((result) => {
//             console.log('Mudado para Controle de crédito bloqueado.')
//         })
//         .catch((err) => {
//             console.error('Erro ao inativar Cliente:', err);
//         })

//     // FAÇO LOGIN
//     tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))

//     // ESPERO PELA MENSAGEM DE ERRO. "CLIENTE NAO LIBERADO PELO FINANCEIRO"
//     I.waitForText('Cliente não liberado pelo financeiro.', 50)



// });


// AfterSuite(() => {

//     tryTo(() => {

//         // ATIVO O CLIENTE
//         client.query(" update cliente set fl_situacao_credito = '3' where cd_cliente = '51668'")
//             .then((result) => {
//                 console.log(' Trocado para Controle de credito Ilimitado')
//             })
//             .catch((err) => {
//                 console.error('Erro ao trocar para controle de credito ilimitado:', err);
//             })
//     })

// });
