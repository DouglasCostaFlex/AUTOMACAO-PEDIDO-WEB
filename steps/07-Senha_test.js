// Feature('Senhas').tag('Senhas');

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
// const SENHA_ALTERADA = 'Flex48303523'


// Before(() => {


//     // CASO ESTEJA FECHADO EU FAÇO O LOGIN
//     tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))
//     I.waitForText('08070', 50)

// })


// Scenario('Trocar Senha', () => {

//     //CLICO PRA ABRIR O MENU PARA ALTERAR A SENHA
//     I.click('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/button')
//     I.click('ALTERAR')
//     I.fillField('Senha Antiga','48303523')
//     I.fillField('Senha Nova','Flex48303523')
//     I.fillField('Confirme a nova senha','Flex48303523')
//     I.click('ALTERAR')

//     //VALIDAÇÃO
//     I.waitForText('Senha alterada com sucesso',30)

//     Login(CNPJ_CORRETO, SENHA_ALTERADA);
//     I.waitForText('08070', 50)

//     //CLICO PRA ABRIR O MENU PARA ALTERA A SENHA PARA A ANTERIOR 
//     I.click('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/button')
//     I.click('ALTERAR')
//     I.fillField('Senha Antiga','Flex48303523')
//     I.fillField('Senha Nova','48303523')
//     I.fillField('Confirme a nova senha','48303523')
//     I.click('ALTERAR')
    
//     //VALIDAÇÃO
//     I.waitForText('Senha alterada com sucesso',50)




   
// }).tag('TrocarSenha')