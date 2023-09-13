Feature('Pedidos Historico').tag('PedidosHistorico');

const { Pagina_Login_Wildfly1,
    Pagina_Produto_16410_Wildfly1,
    Pagina_Historico_Pedido_Wildfly1,
    Pagina_Historico_Financeiro_Wildfly1,
    Pagina_Login_Wildfly2 = '',
    Pagina_Historico_Pedido_Wildfly2 = '',
    Pagina_Historico_Financeiro_Wildfly2 = '',
    Pagina_Produto_08070_Wildfly2 = '',
    Pagina_Login_Wildfly3 = '',
    Pagina_Historico_Pedido_Wildfly3 = '',
    Pagina_Historico_Financeiro_Wildfly3 = '',
    Pagina_Produto_08070_Wildfly3 = '',
} = require("../pages/LinksExternos");

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

Scenario('Aba "Pedidos" Detalhes ', () => {

    //CLICO EM "PEDIDOS"
    I.wait(2)
    I.amOnPage(Pagina_Historico_Pedido_Wildfly1)
    I.wait(5)

    //CLICO EM "DETALHES"
    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/historico-component/div/mat-table/mat-row[1]/mat-cell[9]/a')

    //ESPERO PELAS MENSAGENS CORRETAS.
    I.waitForText('AVISTA')
    I.waitForText('241,25')
    I.waitForText('16410')
    I.waitForText('08070')


}).tag('PedidosDetalhes')


