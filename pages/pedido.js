const { Pagina_Produto_16410_Wildfly1 } = require("./LinksExternos");

const { I } = inject();

module.exports = {

  //AQUI EU COLOCO QUAL PEDIDO EU QUERO ADICIONAR 
  //AQUI ESTA DIRECIONADO PARA "ACABAMENTO MONOCOMANDO CHUVEIRO LINK CROMADO DECA"
  AdicionarPedido() {

    I.refreshPage();
    I.wait(4)
    I.amOnPage(Pagina_Produto_16410_Wildfly1)
    I.waitForText('Quantidade', 20)

    //47,45 o valor do produto, 16410  o codigo dele.
    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produto-detalhe-component/div/div[1]/form/div/div/div[1]/div[5]/button[2]');

  },

  //ESSE METODO EU REMOVO O PRODUTO. ESTA DIRECIONADO PARA O PRODUTO "ADAPTADOR SOLDÁVEL CURTO  60 MM X 2" AMANCO"
  RemoverPedido() {

    I.amOnPage('Pagina_Produto_16410_Wildfly1')
    I.waitForText('Quantidade', 20)

    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produtos-component/mat-sidenav-container/mat-sidenav-content/div[2]/div/div[9]/produto/mat-card/mat-card-actions/button[1]')

  },



  //ESSE METODO ADICIONO APENAS UM PRODUTO COM O VALOR DE 50, ABAIXO O PEDIDO MINIMO.
  CriarPedidoAbaixoDe100() {

    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produtos-component/mat-sidenav-container/mat-sidenav-content/div[2]/div/div[3]/produto/mat-card/mat-card-actions/button[2]')

    //VOU PARA O CARRINHO
    I.click('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/div/a')
    I.wait(2)
  },

  CriarPedidoAbaixoDe200() {

    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produtos-component/mat-sidenav-container/mat-sidenav-content/div[2]/div/div[3]/produto/mat-card/mat-card-actions/button[2]')
    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produtos-component/mat-sidenav-container/mat-sidenav-content/div[2]/div/div[3]/produto/mat-card/mat-card-actions/button[2]')


    //VOU PARA O CARRINHO
    I.click('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/div/a')
    I.wait(2)
  },

  //ESSE METODO CRIA UM PEDIDO COM UM ITEM E VAI PARA O CARRINHO
  CriarPedido() {

    //ADICIONO NO CARRINHO O 16410 QUE DA NO TOTAL 237,25
    I.amOnPage(Pagina_Produto_16410_Wildfly1)
    I.waitForText('Quantidade', 20)
    I.fillField('Quantidade','5')




    //VOU PARA O CARRINHO
    I.click('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/div/a')
    I.wait(2)

  },


  //ADICIONO AO CARRINHO O PRODUTO "ACABAMENTO MONOCOMANDO CHUVEIRO NEXUS 3/4POL CROMADO DOCOL" +2 PRODUTOS 
  CriarPedidoItem2() {

    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produtos-component/mat-sidenav-container/mat-sidenav-content/div[2]/div/div[1]/produto/mat-card/mat-card-actions/button[2]')

    //VOU PARA O CARRINHO
    I.click('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/div/a')
    I.wait(2)

  },

  //ESSE METODO ADICIONA DOIS PRODUTOS DIFERENTES  E VAI PARA O  CARRINHO
  AdicionarDoisProdutosNoCarrinho() {

    this.CriarPedidoItem2();
    I.scrollPageToBottom();
    I.click('CONTINUAR COMPRANDO')
    I.wait(2)
    I.scrollPageToTop();
    this.CriarPedido();
    I.wait(2)



  },



  //USAR NA ABA CARRINHO DENTRO DO PRODUTO
  AdicionarQuantidade() {

    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produto-detalhe-component/div/div[1]/form/div/div/div[1]/div[5]/button[2]')
  },

  DiminuirQuantidade() {

    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produto-detalhe-component/div/div[1]/form/div/div/div[1]/div[5]/button[1]')

  },

  PagamentoAvista() {

    //ESCOLHO A FORMA DE PAGAMENTO "AVISTA"
    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/carrinho-component/div/div[2]/div[1]/div[1]/mat-form-field[1]/div/div[1]/div/mat-select')
    I.wait(4)
    I.click(xpath:{'/html/body/div[2]/div[2]/div/div/mat-option[5]'});
    I.wait(4)

  },

  PagamentoBoleto() {
    I.wait(4)
    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/carrinho-component/div/div[2]/div[1]/div[1]/mat-form-field[1]/div/div[1]/div/mat-select')
    I.wait(4)
    I.click('COPIA 103')
    I.wait(4)


  },

  PagamentoDinheiroEmCarteira() {

    I.wait(4)
    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/carrinho-component/div/div[2]/div[1]/div[1]/mat-form-field[1]/div/div[1]/div/mat-select')
    I.wait(4)
    I.click('/html/body/div[2]/div[2]/div/div/mat-option[5]')
    I.wait(4)


  },



  //ESSE METODO ADICIONA PEDIDOS NO CARRINHO, E ME DEIXA ESCOLHER SE QUERO REALIZAR ORÇAMENTO,FINALIZAR OU CONTINUAR A COMPRA.
  PedidoQuaseCompleto() {

    //ESSE METODO ADICIONA DOIS PRODUTOS DIFERENTES NO CARRINHO.
    this.AdicionarDoisProdutosNoCarrinho();

    I.click('Retirada no Balcão')
    I.scrollPageToBottom();

    //ESCOLHO A FORMA DE PAGAMENTO "AVISTA"
    this.PagamentoAvista();

    //ESCREVO UMA OBSERVAÇÃO 
    I.fillField('Observação', 'TESTE TESTE TESTE')

  }




}
