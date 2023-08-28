Feature('Carrinho Dentro Do Item').tag('CarrinhoDentroDoItem');

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
const pedido = require("../pages/pedido");

const { I } = inject()

//DADOS DE ACORDO COM O QUE PRECISO NA ABA INICIAL 

const CNPJ_CORRETO = '00409260000115'
const SENHA_CORRETA = '48303523'



Before(() => {


    // CASO ESTEJA FECHADO EU FAÇO O LOGIN
    tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))
    I.waitForText('08070', 20)

})

Scenario('Aba "Carrinho" Dentro do item - Finalizar Pedido ', () => {

    //EU CLICO NO ITEM QUE QUERO COMPRAR
    I.click('08070')
    //ESPERO PELO CODIGO DO PRODUTO CORRETO 3387
    I.waitForText('Código: 08070', 20)

    //VALIDAÇÃO
    //VALIDO A FICHA TECNICA DO PRODUTO.
    I.waitForText('Ficha técnica')
    I.waitForText('Pino adaptador com 3 saidas 2p+T (padrão novo). Não indicado adaptar vários pinos juntos devido a sobrecarga de tensão.')
    I.waitForText('Atende as normas NBR NM 60884-1 e NBR 14136.')

    //  ESCOLHO SE EU QUERO "CX" OU "UN"
    I.click('CX')

    //ADICIONO 4  ITEM POR QUANTIDADE 
    I.fillField('Quantidade', '4')

    //VALIDAÇÃO
    I.waitForText('320,00', 5)
    I.waitForText('Vl. Total (IPI + ST + FCP): R$ 320,00', 5)

    //CLICO EM FINALIZAR PEDIDO
    I.click('FINALIZAR PEDIDO')

    //VOU PARA BAIXO 
    I.scrollPageToBottom();

    //EU ESCOLHO A FORMA DE PAGAMENTO AVISTA
    pedido.PagamentoAvista();

    //ESCREVO UMA OBSERVAÇÃO 
    I.fillField('Observação', 'TESTE TESTE TESTE')
    // // CLICO NO BOTAO "FINALIZAR PEDIDO"
    I.click('FINALIZAR PEDIDO')

    //VALIDAÇÃO
    I.waitForText('Pedido Finalizado', 5)

    // /VOU PARA ABA "PEDIDOS" E VEJO SE MOSTRA O PEDIDO FEITO ANTERIORMENTE 
    I.amOnPage(Pagina_Historico_Pedido_Wildfly1)

    //VALIDAÇÃO
    I.waitForText('320', 10)


}).tag('DentroDoItem')