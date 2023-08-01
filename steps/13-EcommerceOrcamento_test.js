// Feature('E-commerce apenas orçamento').tag('EcommerceOrcamento');
// const { Pagina_Login_Wildfly1, Pagina_Produto_08070_Wildfly1, Pagina_Carrinho_Finalizar_Wildfly1 } = require("../pages/LinksExternos");
// const { Login } = require("../pages/login_page");
// const { I } = inject()

// //DADOS DE ACORDO COM O QUE PRECISO NA ABA INICIAL 
// // CLIENTE 51668 LUZZA COMERCIO E INSTALADORA
// const CNPJ_CORRETO = '23.928.274/0001-40'
// const SENHA_CORRETA = '48303523'

// const { Client } = require('pg');
// const { AbrirAllure } = require("../pages/AbrirAllure");

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


// Scenario('E-Commerce com Flag apenas Orçamento', () => {

//     // DESATIVO O CLIENTE
//     client.query("update cliente set fl_ecommerce  = '1' where cd_cliente = '51668'")
//         .then((result) => {
//             console.log('Mudado o E-commerce para somente orçamento.')
//         })
//         .catch((err) => {
//             console.error('Erro ao mudar o E-commerce para somente orçamento:', err);
//         })

//     // FAÇO LOGIN
//     tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))

//     //AGUARDO PELO MENU INICIAL 
//     I.waitForText('08070', 20)
//     //VOU PARA DENTRO DO PRODUTO.
//     I.amOnPage(Pagina_Produto_08070_Wildfly1)
//     I.waitForText('08070', 20)

//     //ADICIONO 50 ITENS NO PEDIDO
//     I.fillField('Quantidade', '50')

//     //NAO VEJO OS VALORES NO CARRINHO
//     I.dontSeeElement('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/div/div', 5);

//     I.wait(5)

//     //VOU PARA ABA FINALIZAR PEDIDO
//     I.amOnPage(Pagina_Carrinho_Finalizar_Wildfly1)
//     I.waitForText('08070', 10)

//     //VOU PARA O FIM DA PÁGINA.
//     I.scrollPageToBottom();

//     //CLICO EM SOLICITAR ORÇAMENTO
//     I.click('SOLICITAR ORÇAMENTO')

//     //ESPERO PELA MENSAGEM "ORÇAMENTO SOLICITAR COM SUCESSO"
//     I.waitForText('Orçamento solicitado com sucesso', 20)


// });


// AfterSuite(() => {

//     tryTo(() => {

//         // ATIVO O CLIENTE
//         client.query("update cliente set fl_ecommerce  = '2' where cd_cliente = '51668'")
//             .then((result) => {
//                 console.log(' Trocado para Pedido/orçamento')
//             })
//             .catch((err) => {
//                 console.error('Erro ao trocar para Trocado para Pedido/orçamento:', err);
//             })
//     })

//     //ABRO O REPORTER
//     AbrirAllure();



// });