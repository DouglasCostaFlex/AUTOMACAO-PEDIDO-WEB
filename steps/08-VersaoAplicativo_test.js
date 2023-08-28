Feature('Versao Aplicativo').tag('VersaoAplicativo');


const { Login } = require("../pages/login_page");
const { I } = inject()

//DADOS DE ACORDO COM O QUE PRECISO NA ABA INICIAL 
const CNPJ_CORRETO = '00409260000115'
const SENHA_CORRETA = '48303523'



Before(() => {


    // CASO ESTEJA FECHADO EU FAÇO O LOGIN
    tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))
    I.waitForText('08070', 10)

})


Scenario('Versao Aplicativo ', () => {

    //CLICO NO MENU 
    I.click('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/button')

    //CLICO EM "VERSAO MÓVEL"
    I.click('VERSÃO MÓVEL')

    //AQUI NAO DA PRA VALIDAR A PAGINA DO GOOGLE STORE

}).tag('@VersaoAplicativo')