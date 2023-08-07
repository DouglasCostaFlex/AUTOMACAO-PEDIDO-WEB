Feature('Finalizar Pedido').tag('FinalizarPedido');

const { Pagina_Login_Wildfly1,
    Pagina_Produto_16410_Wildfly1,
    Pagina_Historico_Pedido_Wildfly1 ,
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
    I.waitForText('08070', 10)

})

Scenario('Aba "FINALIZAR" Validar valores do carrinho ', () => {

    //ESSE METODO ADICIONA DOIS PRODUTOS DIFERENTES NO CARRINHO.
    pedido.AdicionarDoisProdutosNoCarrinho();
    I.scrollPageToTop();

    // VALIDAÇÃO DOS VALORES E PRODUTO DO CARRINHO CONFORME OS PEDIDOS
    I.waitForText('241,25',30)
    I.waitForText('4,00',30)
    I.waitForText('237,25',30)



}).tag('AbaFinalizarValidarValoresCarrinho')

Scenario('Aba "FINALIZAR" Validar Remoção de um produto ', () => {

    //ESSE METODO ADICIONA DOIS PRODUTOS DIFERENTES NO CARRINHO.
    pedido.AdicionarDoisProdutosNoCarrinho();

    //EU REMOVO O PRIMEIRO ITEM "17351 - ACABAMENTO MONOCOMANDO CHUVEIRO NEXUS 3/4POL CROMADO DOCOL"
    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/carrinho-component/div/ul/li[1]/div/div[2]/button')
  
    //VALIDAÇÃO DOS VALORES E PRODUTO DO CARRINHO CONFORME FOI REMOVIDO 1 ITEM.
    I.waitForText('Total: R$ 237,25',10)
    I.waitForText('47,45',10)

}).tag('AbaFinalizarValidarRemocaoCarrinho')

Scenario('Aba "FINALIZAR"  ENTREGA - Endereço de Entrega PRINCIPAL ', () => {

    //ESSE METODO ADICIONA DOIS PRODUTOS DIFERENTES NO CARRINHO.
    pedido.AdicionarDoisProdutosNoCarrinho();

    I.waitForText('Endereço de Entrega',30)
    I.click('Endereço de Entrega')
    I.scrollPageToBottom();

    //ESCOLHO A FORMA DE PAGAMENTO "AVISTA"
    pedido.PagamentoAvista();

    //ESCREVO UMA OBSERVAÇÃO 
    I.fillField('Observação', 'TESTE TESTE TESTE')
    // // CLICO NO BOTAO "FINALIZAR PEDIDO"
    I.click('FINALIZAR PEDIDO')

    //VALIDAÇÃO
    I.waitForText('Pedido Finalizado', 5)

}).tag('AbaFinalizarEntregaEnderecoPrincipal')





//adicionar cenario aqui  ENDEREÇO SECUNDARIO.
Scenario('Aba "FINALIZAR"  ENTREGA - Endereço de Entrega SECUNDÁRIO ', () => {

    //ESSE METODO ADICIONA DOIS PRODUTOS DIFERENTES NO CARRINHO.
    pedido.AdicionarDoisProdutosNoCarrinho();

    //TROCO PARA O ENDEREÇO SECUNDÁRIO.
    I.waitForText('Endereço de Entrega',30)
    I.click('Endereço de Entrega')
    I.wait(2)
    I.click('ALTERAR')
    I.wait(2)
    I.click('SELECIONAR')
    I.waitForText('RUA HELIO ESTEFANO BECKER , 1 (TESTE)',5)
    I.waitForText('REAL PARQUE, SAO JOSE - 88113460',5)

    I.scrollPageToBottom();

    //ESCOLHO A FORMA DE PAGAMENTO "AVISTA"
    pedido.PagamentoAvista();

    //ESCREVO UMA OBSERVAÇÃO 
    I.fillField('Observação', 'TESTE TESTE TESTE')
    // // CLICO NO BOTAO "FINALIZAR PEDIDO"
    I.click('FINALIZAR PEDIDO')

    //VALIDAÇÃO
    I.waitForText('Pedido Finalizado', 5)

}).tag('AbaFinalizarEntregaEnderecoSecundario')



Scenario('Aba "FINALIZAR" ENTREGA - Retirada Balcao ', () => {

    //ESSE METODO ADICIONA DOIS PRODUTOS DIFERENTES NO CARRINHO.
    pedido.AdicionarDoisProdutosNoCarrinho();

    I.click('Retirada no Balcão')
    I.scrollPageToBottom();

    //ESCOLHO A FORMA DE PAGAMENTO "AVISTA"
    pedido.PagamentoAvista();

    //ESCREVO UMA OBSERVAÇÃO 
    I.fillField('Observação', 'TESTE TESTE TESTE')

    // // CLICO NO BOTAO "FINALIZAR PEDIDO"
    I.click('FINALIZAR PEDIDO')

    //VALIDAÇÃO
    I.waitForText('Pedido Finalizado', 5)

}).tag('AbaFinalizarEntregaRetiradaBalcao')

Scenario('Aba "FINALIZAR" AVISTA - VALOR ABAIXO DE 200 ', () => {

    //ESSE METODO ADICIONO APENAS UM PRODUTO COM O VALOR DE 50, ABAIXO O PEDIDO MINIMO.
    pedido.CriarPedidoAbaixoDe200();

    I.click('Retirada no Balcão')
    I.scrollPageToBottom();

    //ESCOLHO A FORMA DE PAGAMENTO "AVISTA"
    pedido.PagamentoAvista();

    //ESCREVO UMA OBSERVAÇÃO 
    I.fillField('Observação', 'TESTE TESTE TESTE')

    // // CLICO NO BOTAO "FINALIZAR PEDIDO"
    I.click('FINALIZAR PEDIDO')

    //VALIDAÇÃO
    I.waitForText('Parcela 1(100%) abaixo valor mínimo (R$200.00).', 5)

}).tag('AbaFinalizarAvistaValorAbaixo')

Scenario('Aba "FINALIZAR" BOLETO - VALOR ABAIXO DE 100 ', () => {

    //ESSE METODO ADICIONO APENAS UM PRODUTO COM O VALOR DE 50, ABAIXO O PEDIDO MINIMO.
    pedido.CriarPedidoAbaixoDe100();

    I.click('Retirada no Balcão')
    I.scrollPageToBottom();

    //ESCOLHO A FORMA DE PAGAMENTO "BOLETO ITAU"
    pedido.PagamentoBoleto();

    //ESCREVO UMA OBSERVAÇÃO 
    I.fillField('Observação', 'TESTE TESTE TESTE')

    //CLICO NO BOTAO "FINALIZAR PEDIDO"
    I.click('FINALIZAR PEDIDO')

    //VALIDAÇÃO
    I.waitForText('Parcela 1(100%) abaixo valor mínimo (R$100.00).', 5)


}).tag('FinalizarBoletoValorAbaixo')

Scenario('Aba "FINALIZAR" Continuar Comprando', () => {

    //ESSE METODO ADICIONA PEDIDOS NO CARRINHO, E ME DEIXA ESCOLHER SE QUERO REALIZAR ORÇAMENTO,FINALIZAR OU CONTINUAR A COMPRA.
    pedido.PedidoQuaseCompleto();

    I.click('CONTINUAR COMPRANDO')
    I.scrollPageToTop();

    //VALIDAÇÃO
    I.waitForText('08070', 5)

}).tag('AbaFinalizarContinuarComprando')

Scenario('Aba "FINALIZAR" Finalizar Pedido', () => {

    //ESSE METODO ADICIONA PEDIDOS NO CARRINHO, E ME DEIXA ESCOLHER SE QUERO REALIZAR ORÇAMENTO,FINALIZAR OU CONTINUAR A COMPRA.
    pedido.PedidoQuaseCompleto();

    I.click('FINALIZAR PEDIDO')

    //VALIDAÇÃO
    I.waitForText('Pedido Finalizado', 5)

}).tag('AbaFinalizarFinalizarPedido')

Scenario('Aba "FINALIZAR" Solicitar Orçamento', () => {

    //ESSE METODO ADICIONA PEDIDOS NO CARRINHO, E ME DEIXA ESCOLHER SE QUERO REALIZAR ORÇAMENTO,FINALIZAR OU CONTINUAR A COMPRA.
    pedido.PedidoQuaseCompleto();

    I.click('SOLICITAR ORÇAMENTO')

    //VALIDAÇÃO
    I.waitForText('Obrigado por cotar conosco. Para aprovar sua cotação entre em contato com seu representante no fone (49) 3331-0600.', 5)

}).tag('AbaFinalizarSolicitarOrcamento')




