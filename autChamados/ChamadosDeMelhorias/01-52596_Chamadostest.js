Feature('Chamado #52596 ').tag('52596');
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


// #infoteste #H99

// Acessar a mesma base com o mesmo cliente e realizar o mesmo filtro (pode ser "PARAFUSO").
// Verificar se o resultado condiz com o que foi solicitado.



Before(() => {

    // EU FAÇO O LOGIN
    tryTo(() => Login(CNPJ_CORRETO, SENHA_CORRETA))
    I.waitForText('08070', 30)

})

Scenario('Chamado "52596" ', () => {

    //NO MENU PESQUISAR, PESQUISO E VERIFICO SE VEJO OS ITENS.
    I.fillField('Pesquisar item', 'Roda')
    I.waitForText('17645')
    I.fillField('Pesquisar item', 'Chave')
    I.waitForText('21815')
    I.fillField('Pesquisar item', 'Bucha')
    I.waitForText('19894')

});



