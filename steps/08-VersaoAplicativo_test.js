// Feature('Versao Aplicativo').tag('VersaoAplicativo');

// const { 

//     Pagina_Login_Wildfly1,
//     Pagina_Historico_Pedido_Wildfly1,
//     Pagina_Historico_Financeiro_Wildfly1,
//     Pagina_Produto_16410_Wildfly1,
//     Pagina_Produto_08070_Wildfly1 ,
//     Pagina_Carrinho_Finalizar_Wildfly1,


//     Pagina_Login_Wildfly2,
//     Pagina_Historico_Pedido_Wildfly2,
//     Pagina_Historico_Financeiro_Wildfly2,
//     Pagina_Produto_16410_Wildfly2,
//     Pagina_Produto_08070_Wildfly2,
//     Pagina_Carrinho_Finalizar_Wildfly2,


//     Pagina_Login_Wildfly3,
//     Pagina_Historico_Pedido_Wildfly3,
//     Pagina_Historico_Financeiro_Wildfly3,
//     Pagina_Produto_16410_Wildfly3,
//     Pagina_Produto_08070_Wildfly3,
//     Pagina_Carrinho_Finalizar_Wildfly3
    
// } = require("../pages/LinksExternos");
// const { Login } = require("../pages/login_page");
// const { I } = inject()

// //DADOS DE ACORDO COM O QUE PRECISO NA ABA INICIAL 
// const CNPJ_CORRETO = '00409260000115'
// const SENHA_CORRETA = '48303523'



// Before(() => {

 
//     // CASO ESTEJA FECHADO EU FAÇO O LOGIN
//     tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))
//     I.waitForText('08070',50)

// })


// Scenario('Versao Aplicativo ', () => {

//     //CLICO NO MENU 
//     I.click('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/button')
    
//     //CLICO EM "VERSAO MÓVEL"
//     I.click('VERSÃO MÓVEL')
    
//     //AQUI NAO DA PRA VALIDAR A PAGINA DO GOOGLE STORE

// }).tag('@VersaoAplicativo')