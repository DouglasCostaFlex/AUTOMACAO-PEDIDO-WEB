Feature('ClienteInativo').tag('ClienteInativo');

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

    //CONECTA AO BANCO
    client.connect()
        .then(() => {
            console.log('Conexão estabelecida com sucesso!');

        })
        .catch((err) => {
            console.error('Erro ao conectar ao banco de dados:', err);
        });

})


Scenario('Cliente Inativo', () => {

    // DESATIVO O CLIENTE
    client.query("UPDATE CLIENTE SET FL_ATIVO = 'N' WHERE cd_cliente = '51668';")
        .then((result) => {
            console.log('Cliente inativado')
        })
        .catch((err) => {
            console.error('Erro ao inativar Cliente:', err);
        })

    // FAÇO LOGIN
    tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))

    // ESPERO PELA MENSAGEM DE ERRO. "CLIENTE INATIVO."
    I.waitForText('Cliente inativo.', 50)



}).tag('@ClienteInativo')


AfterSuite(() => {

    tryTo(() => {

        // ATIVO O CLIENTE
        client.query("UPDATE CLIENTE SET FL_ATIVO = 'S' WHERE cd_cliente = '51668';")
            .then((result) => {
                console.log('Ativado Cliente')
            })
            .catch((err) => {
                console.error('Erro ao Ativar Cliente:', err);
            })
    })

});
