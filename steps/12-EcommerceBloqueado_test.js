Feature('E-commerce Bloqueado').tag('EcommerceBloqueado');
const { Pagina_Login_Wildfly1 } = require("../pages/LinksExternos");
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


Scenario('E-Commerce Com flag Bloqueado', () => {

    // DESATIVO O CLIENTE
    client.query("update cliente set fl_ecommerce  = '0' where cd_cliente = '51668'")
        .then((result) => {
            console.log('Mudado o E-commerce para Bloqueado.')
        })
        .catch((err) => {
            console.error('Erro ao mudar o E-commerce para Bloqueado:', err);
        })

    // FAÇO LOGIN
    tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))

    //AGUARDO PELA MENSAGEM "SOLICITE LIBERAÇÃO DE USO DO E-COMMERCE"
    I.waitForText('Solicite liberação de uso do e-commerce.', 20)


});


AfterSuite(() => {

    // ATIVO O CLIENTE
    client.query("update cliente set fl_ecommerce  = '2' where cd_cliente = '51668'")
        .then((result) => {
            console.log(' Trocado para Pedido/orçamento')
        })
        .catch((err) => {
            console.error('Erro ao trocar para Trocado para Pedido/orçamento:', err);
        })


});
