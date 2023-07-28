
const { 

    Pagina_Login_Wildfly1,
    Pagina_Historico_Pedido_Wildfly1,
    Pagina_Historico_Financeiro_Wildfly1,
    Pagina_Produto_16410_Wildfly1,
    Pagina_Produto_08070_Wildfly1 ,
    Pagina_Carrinho_Finalizar_Wildfly1,


    Pagina_Login_Wildfly2,
    Pagina_Historico_Pedido_Wildfly2,
    Pagina_Historico_Financeiro_Wildfly2,
    Pagina_Produto_16410_Wildfly2,
    Pagina_Produto_08070_Wildfly2,
    Pagina_Carrinho_Finalizar_Wildfly2,


    Pagina_Login_Wildfly3,
    Pagina_Historico_Pedido_Wildfly3,
    Pagina_Historico_Financeiro_Wildfly3,
    Pagina_Produto_16410_Wildfly3,
    Pagina_Produto_08070_Wildfly3,
    Pagina_Carrinho_Finalizar_Wildfly3
    
} = require("../pages/LinksExternos");

const { I } = inject();


module.exports = {


    Login(CNPJ, SENHA) {

        I.amOnPage(Pagina_Login_Wildfly2)
        I.resizeWindow(1920, 1080);
        tryTo(() => I.waitForText('Avançado'))
        tryTo(() => I.click('Avançado'))
        tryTo(() => I.click('Ir para 192.168.1.128 (não seguro)'))
        I.waitForText('CNPJ')
        I.fillField('CNPJ', CNPJ)
        I.fillField('Senha', secret(SENHA))
        I.click('LOGIN')


    }







}


    
