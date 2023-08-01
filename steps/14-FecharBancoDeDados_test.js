Feature('EncerrarBanco').tag('EncerrarBanco');
const { AbrirAllure } = require("../pages/AbrirAllure");
const { Client } = require('pg');
const client = new Client({
    user: 'flextotal',
    host: '192.168.1.3',
    database: 'rezzadori_automacao',
    password: 'Fl3xt0t@L',
    port: 5432,
});

Scenario('Encerrar conexão com o banco ', async () => {


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

    //ABRO O REPORTER
    AbrirAllure();

    //ENCERRO O PROGRAMA.
    await process.exit(0);

})

