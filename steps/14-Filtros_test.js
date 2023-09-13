Feature('Filtros').tag('FiltrosPorSubgrupo');

const { Login } = require("../pages/login_page");
const { I } = inject()

//DADOS DE ACORDO COM O QUE PRECISO NA ABA INICIAL 
// CLIENTE 51668 LUZZA COMERCIO E INSTALADORA
const CNPJ_CORRETO = '23.928.274/0001-40'
const SENHA_CORRETA = '48303523'

const { AbrirAllure } = require("../pages/AbrirAllure");

const {

    Pagina_Login_Wildfly1,
    Pagina_Historico_Pedido_Wildfly1,
    Pagina_Historico_Financeiro_Wildfly1,
    Pagina_Produto_16410_Wildfly1,
    Pagina_Produto_08070_Wildfly1,
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

Before(() => {


    // CASO ESTEJA FECHADO EU FAÇO O LOGIN
    tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))
    I.waitForText('08070', 50)



});


Scenario('Filtro por linha e subgrupo', async () => {

    I.click('ABRASIVOS')
    I.waitForText('19895')
    I.click('SERRA')
    I.waitForText('17622')
    
    await AbrirAllure();

}).tag('LinhaESubgrupo')