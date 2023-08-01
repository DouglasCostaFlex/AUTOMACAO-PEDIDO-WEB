// Feature('Pedido').tag('Pedido');
// const { Login } = require("../pages/login_page");
// const pedido = require("../pages/pedido");

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

// const { I } = inject()

// //DADOS DE ACORDO COM O QUE PRECISO NA ABA INICIAL 

// const CNPJ_CORRETO = '00409260000115'
// const SENHA_CORRETA = '48303523'




// Before(() => {


//     // CASO ESTEJA FECHADO EU FAÇO O LOGIN
//     tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))
//     I.waitForText('08070', 30)

// })

// Scenario('Aba "Inicial" ', () => {

//     I.resizeWindow(1920, 1080);
//     //NO PRODUTO "ACABAMENTO CROMADO" ADICIONO +5 PRODUTOS.
//     I.refreshPage();
//     I.wait(4)
//     I.amOnPage(Pagina_Produto_16410_Wildfly1)
//     I.waitForText('Quantidade', 20)
//     I.fillField('Quantidade', '5')

//     //ESPERO PELO VALOR DE 5 PEDIDOS ADICIONADOS NO CARRINHO
//     I.waitForText('237,25', 10)

//     //REMOVO 2 PEDIDOS 
//     I.fillField('Quantidade', '3')

//     //ESPERO PELO VALOR DE APENAS 3 PEDIDOS ADICIONADOS NO CARRINHO
//     I.waitForText('142,35', 5)

//     //SALVO UMA PRINTSCREEN APENAS PARA IR PRO OUTPUT, CASO EU QUEIRA VERIFICAR O PASSO A PASSO
//     I.saveScreenshot('@AbaInicial.png')

// }).tag('@AbaInicial')

// Scenario('Aba "Inicial" Histórico - Pedidos já Comprados.', () => {

//     //CASO A ABA "FILTROS" ESTEJA FECHADO, IRÁ ABRIR.
//     tryTo(() => I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produtos-component/mat-sidenav-container/mat-sidenav-content/mat-toolbar/button'))

//     //CLICO NA FLAG "ITENS JA COMPRADOS"
//     I.click('ITENS JÁ COMPRADOS')
//     //ESPERO PELO PRODUTO JA COMPRADOS

//     tryTo(() => I.waitForText('08070', 20))
//     tryTo(() => I.waitForText("Nenhum item encontrado para estes filtros.", 20))



//     //DESMARCO A FLAG
//     I.click('ITENS JÁ COMPRADOS')

//     //SALVO UMA PRINTSCREEN APENAS PARA IR PRO OUTPUT, CASO EU QUEIRA VERIFICAR O PASSO A PASSO
//     I.saveScreenshot('@ItensJaComprados.png')


// }).tag('@ItensJaComprados')


// Scenario('Aba "Inicial" Filtros ', () => {

//     //CASO A ABA "FILTROS" ESTEJA FECHADO, IRÁ ABRIR.
//     tryTo(() => I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produtos-component/mat-sidenav-container/mat-sidenav-content/mat-toolbar/button'))

//     //CLICO NA FLAG "PROMOÇÃO"
//     I.click('PROMOÇÃO')
//     //ESPERO PELO PRODUTO "08070"
//     I.waitForText('08070')
//     //DESMARCO A FLAG ""
//     I.click('PROMOÇÃO')

//     //CLICO NA FLAG "ABRAÇADEIRAS"
//     I.click('ABRAÇADEIRAS')
//     //ESPERO PELO PRODUTO "16687"
//     I.waitForText('16687')
//     //DESMARCO A FLAG "ABRAÇADEIRAS"
//     I.click('ABRAÇADEIRAS')

//     //CLICO NA FLAG "ACESSÓRIOS CAIXA ACOPLADA"
//     I.click('ACESSÓRIOS CAIXA ACOPLADA')
//     //ESPERO PELO PRODUTO "17331"
//     I.waitForText('17331')
//     //DESMARCO A FLAG "ACESSÓRIOS CAIXA ACOPLADA""
//     I.click('ACESSÓRIOS CAIXA ACOPLADA')

//     //SALVO UMA PRINTSCREEN APENAS PARA IR PRO OUTPUT, CASO EU QUEIRA VERIFICAR O PASSO A PASSO
//     I.saveScreenshot('@Filtros.png')


// }).tag('@Filtros')

// Scenario('Aba "CARRINHO" Continuar comprando  ', () => {

//     //ADICIONO 2 ITENS E VOU PARA O CARRINHO
//     pedido.CriarPedido();

//     //VOU PARA BAIXO 
//     I.scrollPageToBottom();
//     //CLICO NO BOTAO "CONTINUAR COMPRANDO"
//     I.click('CONTINUAR COMPRANDO')

//     //AGUARDO IR PARA O MENU INICIAL
//     I.wait(1)

//     //VOU PARA CIMA 
//     I.scrollPageToTop();
//     //ESPERO VER O PRODUTO "08070"
//     I.waitForText('08070', 10)

//     //SALVO UMA PRINTSCREEN APENAS PARA IR PRO OUTPUT, CASO EU QUEIRA VERIFICAR O PASSO A PASSO
//     I.saveScreenshot('@AbaContinuarComprando.png')

// }).tag('@AbaContinuarComprando')


// Scenario('Aba "CARRINHO" Solicitar Orçamento ', () => {

//     //REALIZO O PEDIDO E VOU PARA O CARRINHO.
//     pedido.CriarPedido();

//     //VOU PARA BAIXO 
//     I.scrollPageToBottom();
//     //CLICO NO BOTAO "SOLICITAR ORÇAMENTO"
//     I.click('SOLICITAR ORÇAMENTO')

//     //ESPERO PELA MENSAGEM "ORÇAMENTO SOLICITADO"
//     I.waitForText('Orçamento solicitado com sucesso', 10)
//     //CLICO NO BOTAO "SOLICITAR NOVO ORÇAMENTO"
//     I.click('SOLICITAR NOVO ORÇAMENTO')
//     //ESPERO PELO ITEM NO MENU INICIAL
//     I.waitForText('08070', 10)

//     //VOU PARA ABA "PEDIDOS" E VEJO SE MOSTRA O PEDIDO FEITO ANTERIORMENTE 
//     I.amOnPage(Pagina_Historico_Pedido_Wildfly1)
//     I.waitForText('237,25', 10)

//     //SALVO UMA PRINTSCREEN APENAS PARA IR PRO OUTPUT, CASO EU QUEIRA VERIFICAR O PASSO A PASSO
//     I.saveScreenshot('@SolicitarOrcamento.png')

// }).tag('@SolicitarOrcamento')

// Scenario('Aba "CARRINHO" Finalizar pedido ', () => {

//     //REALIZO O PEDIDO E VOU PARA O CARRINHO.
//     pedido.CriarPedido();

//     //VOU PARA BAIXO 
//     I.scrollPageToBottom();
//     //ESCOLHO A FORMA DE PAGAMENTO "AVISTA"
//     I.click('Forma Pgto.')
//     I.click('//*[@id="mat-option-0"]')

//     //ESCREVO UMA OBSERVAÇÃO 
//     I.fillField('Observação', 'TESTE TESTE TESTE')
//     // // CLICO NO BOTAO "FINALIZAR PEDIDO"
//     I.click('FINALIZAR PEDIDO')

//     //VOU PARA ABA "PEDIDOS" E VEJO SE MOSTRA O PEDIDO FEITO ANTERIORMENTE 
//     I.amOnPage(Pagina_Historico_Pedido_Wildfly1)
//     I.waitForText('237,25', 10)

//     //SALVO UMA PRINTSCREEN APENAS PARA IR PRO OUTPUT, CASO EU QUEIRA VERIFICAR O PASSO A PASSO
//     I.saveScreenshot('@AbaCarrinhoFinalizarPedido.png')

// }).tag('@AbaCarrinhoFinalizarPedido')



// // Scenario('Codigo Base Para Realizar comparaçoes ', async () => {

// //     I.amOnPage('https://192.168.1.236:9090/pedidoweb/user/pedidos')
// //     I.wait(2)

// //     //esse numero tem que vir do select do banco de dados
// //     const NumeroSelect = '1002704750E'
// //     //esse numero do pedido pega o primeiro numero de pedido da aba pedidos
// //     const NumeroDePedido = await I.grabTextFrom('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/historico-component/div/mat-table/mat-row[1]/mat-cell[1]');

// //     //aqui mostra o numero do pedido apenas para testar se pegou
// //     console.log(NumeroDePedido);

// //     //aqui compara se o numeroDepedido e o numeroSelect sao iguais
// //     if (NumeroSelect === NumeroDePedido) {
// //         console.log("Os Nr são iguais.");

// //     } else {
// //         console.log("Os Nr são diferentes.");
// //     }

// //     //aqui eu espero pelo numero do select na página.
// //     I.waitForText(Numer, 5)

// // }).tag('@123')






