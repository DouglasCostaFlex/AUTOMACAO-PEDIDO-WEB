Feature('Chamado #57449 ').tag('@57449');
const { Login } = require("../../pages/login_page");
const { I } = inject()

// #infocliente
// Melhorias no PedidoWeb
// Na tela de detalhamento do item, ao clicar na foto a mesma é exibida em ampliação.
// Tela de histórico passa a exibir todos os pedidos realizado pelo cliente (realizados pelo AFV ERP e PedidoWeb).
// Configuração para indicar qual o preço será exibido (preço por kg ou caixa)

// #infoteste #H164

// 1 - Foi criada uma nova config no pedidoweb para indicar o preço que será mostrado na tela inicial. A config é a 100094.Unidade de Exibição do Preço na Tela Inicial PedidoWeb.
// 2 - Caso ela esteja marcada como "Unidade padrão de venda", manterá o funcionamento como é hoje.
// 3 - Caso ela esteja marcada como "Unidade definida na tabela de preço", se a unidade de venda não estiver na tabela, mostrará o preço da unidade da tabela  sem conversão. Porém ao lançar o produto, lançará na unidade de venda.
// 4 - O preço unitário só será mostrado na tela inicial se ele for diferente do preço normal mostrado.

// 5 - Criado componente para ampliar as fotos ao clicar na imagem na tela de detalhes do item.
// 6 - Na área de histórico mostrará todos os pedidos do cliente diferentes de cancelados. Pode ser origem no afv ou erp.
// 7 - No carrinho mostrará os dados do vendedor do cliente. Nome e Telefone


//DADOS DO BANCO 
const { Client } = require('pg');
const client = new Client({
    user: 'flextotal',
    host: '192.168.1.3',
    database: 'rezzadori_automacao',
    password: 'Fl3xt0t@L',
    port: 5432,
});

//DADOS DE ACORDO COM O QUE PRECISO NA ABA INICIAL 

const CNPJ_CORRETO = '00409260000115'
const SENHA_CORRETA = '48303523'

Before(() => {

    // EU FAÇO O LOGIN
    tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))
    I.waitForText('08070', 30)

})

Scenario(' Verificando aplianção de foto', () => {

    //VOU PARA PÁGINA DETALHES DO PRODUTO
    I.amOnPage('https://192.168.1.236:9090/pedidoweb/user/produtoDetalhesCarroussel/6458')
    //EU ESPERO PELO CODIGO DO ITEM
    I.waitForText('08070', 20)
    //CLICO NA FOTO DO PRODUTO
    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produto-detalhe-component/div/div[1]/div/div/div')
    //ESPERO PELO TEXTO DO PRODUTO "08070"
    I.waitForText('08070 - 12250 PINO 3 SAIDAS 2P+T 10A ILUMI', 20)

})

Scenario(' Verificando dados do vendedor no carrinho.', () => {

    //ADICIONO PRODUTO 08070 NO CARRINHO
    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produtos-component/mat-sidenav-container/mat-sidenav-content/div[2]/div/div[1]/produto/mat-card/mat-card-actions/button[2]')
    //CLICO NO BOTAO DE CARRINHO
    I.click('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/div/a')

    //ESPERO PELOS DADOS DO VENDEDOR.
    I.waitForText('Vendedor: CLIENTES APP')
    I.waitForText('Fone: (49) 9.9126-7588')

})



