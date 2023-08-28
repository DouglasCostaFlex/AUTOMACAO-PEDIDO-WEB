Feature('Senhas').tag('Senhas');


const { Login } = require("../pages/login_page");
const { I } = inject()

//DADOS DE ACORDO COM O QUE PRECISO NA ABA INICIAL 

const CNPJ_CORRETO = '00409260000115'
const SENHA_CORRETA = '48303523'
const SENHA_ALTERADA = 'Flex48303523'


Before(() => {


    // CASO ESTEJA FECHADO EU FAÇO O LOGIN
    tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))
    I.waitForText('08070', 10)

})


Scenario('Trocar Senha', () => {

    //CLICO PRA ABRIR O MENU PARA ALTERAR A SENHA
    I.click('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/button')
    I.click('ALTERAR')
    I.fillField('Senha Antiga', '48303523')
    I.fillField('Senha Nova', 'Flex48303523')
    I.fillField('Confirme a nova senha', 'Flex48303523')
    I.click('ALTERAR')

    //VALIDAÇÃO
    I.waitForText('Senha alterada com sucesso', 5)

    Login(CNPJ_CORRETO, SENHA_ALTERADA);
    I.waitForText('08070', 10)

    //CLICO PRA ABRIR O MENU PARA ALTERA A SENHA PARA A ANTERIOR 
    I.click('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/button')
    I.click('ALTERAR')
    I.fillField('Senha Antiga', 'Flex48303523')
    I.fillField('Senha Nova', '48303523')
    I.fillField('Confirme a nova senha', '48303523')
    I.click('ALTERAR')

    //VALIDAÇÃO
    I.waitForText('Senha alterada com sucesso', 5)


}).tag('TrocarSenha')