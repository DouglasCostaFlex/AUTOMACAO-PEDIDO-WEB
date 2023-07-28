Feature('Controle de Credito Avista').tag('CtcAvista');


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
    Pagina_Produto_08070_Wildfly1,
} = require("../pages/LinksExternos");

const { Login } = require("../pages/login_page");
const { I } = inject()

//DADOS DE ACORDO COM O QUE PRECISO NA ABA INICIAL 
// CLIENTE 51668 LUZZA COMERCIO E INSTALADORA
const CNPJ_CORRETO = '23.928.274/0001-40'
const SENHA_CORRETA = '48303523'

const { Client } = require('pg');
const client = new Client({
    user: 'flextotal',
    host: '192.168.1.3',
    database: 'rezzadori_automacao',
    password: 'Fl3xt0t@L',
    port: 5432,
});

Before(() => {

    //AQUI SEMPRE ELE DA O COMANDO SQL PARA DEIXAR A DESCRICAO 1 E NAO FECHO A CONEXAO
    client.connect()
        .then(() => {
            console.log('Conexão estabelecida com sucesso!');

        })
        .catch((err) => {
            console.error('Erro ao conectar ao banco de dados:', err);
        });

})


Scenario('Controle de crédito Avista', () => {

    // DESATIVO O CLIENTE
    client.query(" update cliente set fl_situacao_credito = '1' where cd_cliente = '51668'")
        .then((result) => {
            console.log('Mudado para Controle de crédito Avista.')
        })
        .catch((err) => {
            console.error('Erro ao inativar Cliente:', err);
        })

    // FAÇO LOGIN
    tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))

    //VOU NO CARRINHO E ADICIONO 50 ITENS POR UNIDADE E VOU PARA O CARRINHO 
    I.amOnPage(Pagina_Produto_08070_Wildfly1)
    I.waitForText('08070', 20)

    //ADICIONO ITEM NO CARRINHO
    I.fillField('Quantidade', '50')

    //ESPERO PELO VALOR NO CARRINHO
    I.waitForText('230,86', 20)

    //VOU PARA O CARRINHO
    I.amOnPage(Pagina_Produto_08070_Wildfly1)
    I.waitForText('08070', 20)

    //VOU PARA O FIM DA PÁGINA.
    I.scrollPageToBottom();

    //CLICO EM FINALIZAR PEDIDO E ESPERO PELO TEXTO "LIBERADO SOMENTE PARA COMPRAS Á VISTA."
    I.click('FINALIZAR PEDIDO')
    I.waitForText('Liberado somente para compras à vista.')


});


AfterSuite(() => {

    tryTo(() => {

        // ATIVO O CLIENTE
        client.query(" update cliente set fl_situacao_credito = '3' where cd_cliente = '51668'")
            .then((result) => {
                console.log(' Trocado para Controle de credito Ilimitado')
            })
            .catch((err) => {
                console.error('Erro ao trocar para controle de credito ilimitado:', err);
            })
    })

});
