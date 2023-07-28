Feature('Chamado 81998').tag('81998');

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

// #infoteste

// Informações para Teste
// 1 - Acessar o pedido web e efetuar um pedido
// 2 - Validar se não mudou a dt_atz do item do pedido na tabela item
// 3 - Na config deixar descrição 2 e validar se o nome fica correto nas tela inicial, detalhe do produto e no carrinho.



Before(() => {

    //AQUI SEMPRE ELE DA O COMANDO SQL PARA DEIXAR A DESCRICAO 1 E NAO FECHO A CONEXAO
    client.connect()
        .then(() => {
            console.log('Conexão estabelecida com sucesso!');

            //EXECUTO O COMANDO NO BANCO DE DADOS PARA A DESCRICAO 1
            client.query("update configuracao_sistema set vl_entrada ='DESCRICAO' where cd_entrada = '101004';")   //COMANDO SQL AQUI
                .then((result) => {

                    console.log('ALTERADO PARA DESCRICAO 1 NO BANCO DE DADOS.')

                })

                .catch((err) => {
                    console.error('Erro ao executar o update 1:', err);
                })


        })
        .catch((err) => {
            console.error('Erro ao conectar ao banco de dados:', err);
        });


    // EU FAÇO O LOGIN
    tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))
    I.waitForText('08070', 30)

})

Scenario('Chamado "81998" ', () => {

    //INSIRO NO CAMPO PESQUISA O CÓDIGO DO PRODUTO QUE EU QUERO E DOU UM ENTER .
    I.fillField('Pesquisar', '12014')
    I.pressKey('Enter')

    //ESPERO PELA DESCRICAO 1
    I.waitForText('DESCRICAO1', 20)



    //EXECUTO O COMANDO NO BANCO DE DADOS PARA A DESCRICAO 2
    client.query("update configuracao_sistema set vl_entrada ='DESCRICAO2' where cd_entrada = '101004'")   //COMANDO SQL AQUI
        .then((result) => { 
            
            console.log('ALTERADO PARA DESCRICAO2 NO BANCO DE DADOS.')

        })

        .catch((err) => {
            console.error('Erro ao executar o update 1:', err);
        })

   

    //DOU UM REFRESH NA PAGINA
    I.refreshPage();
    //AGUARDO A PAGA REGARREGAR
    I.waitForText('Pesquisar', 20)

    I.wait(5)

    //INSIRO NO CAMPO PESQUISA O CÓDIGO DO PRODUTO QUE EU QUERO E DOU UM ENTER.
    I.fillField('Pesquisar', '12014')
    I.pressKey('Enter')

    //AGUARDO PELA DESCRICAO 2
    I.waitForText('DESCRICAO2', 20)


    // testar no produto 12014
    //COMANDO PARA BOTAR A DESCRICAO 1
    //update configuracao_sistema set vl_entrada ='DESCRICAO2' where cd_entrada = '101004';

    //COMANDO PARA BOTAR A DESCRICAO 2
    //update configuracao_sistema set vl_entrada ='DESCRICAO' where cd_entrada = '101004';


});


After(() => {

    //FECHO A CONEXAO COM O BANCO DE DADOS
    tryTo(() => {
        client.end()
            .then(() => {
                console.log('Conexão encerrada.');
            })
            .catch((err) => {
                console.error('Erro ao fechar a conexão com o banco de dados:', err);
            });
    });

});

