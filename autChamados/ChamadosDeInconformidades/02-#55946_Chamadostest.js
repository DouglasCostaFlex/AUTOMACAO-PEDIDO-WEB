Feature('Chamado 55946').tag('55946');
const { Login } = require("../../pages/login_page");
const { I } = inject()


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

// #infoteste #H148

// 1 - Cadastrar vários produtos similares e relacionados a um item.
// 2 - Abrir a tela de detalhes do produto e em seguida lançar o item.
// 3 - O carregamento dos itens relacionados e similares não deve trancar o lançamento do item.




Before(() => {

    // EU FAÇO O LOGIN
    tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))
    I.waitForText('08070', 30)


})


Scenario('Chamado "#55946" ', () => {

    //VOU PARA O ITEM Código: 10414
    I.wait(3)
    I.amOnPage('https://192.168.1.236:9090/pedidoweb/user/produtoDetalhesCarroussel/17472')
    I.waitForText('Código: 16410', 20)

    //EU CLICO NO BOTAO DE "+" PARA SOMAR O ITEM.
    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produto-detalhe-component/div/div[1]/form/div/div/div[1]/div[5]/button[2]')

    //EU ESPERO PELO VALOR CORRETO NO CARRINHO.
    I.waitForText('R$ 47,45',10)

    //EU VOU PARA O FIM DA PÁGINA.
    I.scrollPageToBottom();

    //ADICIONO UM ITEM SIMILAR E ESPERO PELO VALOR TOTAL COM O ITEM ANTERIOR.
    I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav-content/div[1]/produto-detalhe-component/div/home-component/div/ngu-carousel/div/div/div[1]/ngu-item[1]/produto/mat-card/mat-card-actions/button[2]')
    I.waitForText('R$ 68,72',10)

}).tag('55946');