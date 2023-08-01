// Feature('Financeiro Historico').tag('FinanceiroHistorico');

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
// const CNPJ_CORRETO = '00409260000115'
// const SENHA_CORRETA = '48303523'



// Before(() => {
    
  
//     // CASO ESTEJA FECHADO EU FAÇO O LOGIN
//     tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))
//     I.waitForText('08070',10)

// })

// Scenario('Aba "Financeiro" Detalhes ', () => {
    
    
//     I.wait(2)
//     //VOU PARA A ABA "FINANCEIRO"
//     I.amOnPage(Pagina_Historico_Financeiro_Wildfly1)
//     I.wait(5)

//     //CLICO EM "DETALHES"
//     I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/historico-financeiro/div/mat-table/mat-row[1]/mat-cell[6]/a')

//     //ESPERO PELAS MENSAGENS
//     I.waitForText('Detalhes')
//     I.waitForText('Código filial: 1')
//     I.waitForText('Código Cliente: 2241')
//     I.waitForText('Nr documento: 512034')
//     I.waitForText('Data emissão: 03/08/2021')
//     I.waitForText('Linha digitavel: 00190.00009 01526.510001 00467.475174 4 87290000014830')
//     I.waitForText('Valor nominal: R$ 148,30')
//     I.waitForText('Chave de Acesso NFe: 42210875384404000125550040005120341116285150')
//     I.waitForText('Situação: Quitado')
//     I.waitForText('Forma de pagamento: BOLETO BANCO DO BRASIL')
//     I.waitForText('Nosso número: 0000467475')
//     I.waitForText('Número documento: 512034-1')
//     I.waitForText('Valor saldo: R$ 0,00')
   

// }).tag('FinanceiroDetalhes')