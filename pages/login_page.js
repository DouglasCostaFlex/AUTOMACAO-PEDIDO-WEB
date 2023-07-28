const { Pagina_Login_Wildfly1 } = require("./LinksExternos");

const { I } = inject();


module.exports = {


    Login(CNPJ, SENHA) {

        I.amOnPage(Pagina_Login_Wildfly1)
        I.resizeWindow(1920, 1080);
        tryTo(() => I.waitForText('Avançado'))
        tryTo(() => I.click('Avançado'))
        tryTo(() => I.click('Ir para 192.168.1.236 (não seguro)'))
        I.waitForText('CNPJ')
        I.fillField('CNPJ', CNPJ)
        I.fillField('Senha', secret(SENHA))
        I.click('LOGIN')


    }







}


    
