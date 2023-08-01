
const { I } = inject()
const { exec } = require('child_process')
const allureServeCommand = 'allure serve "C:\\Users\\flexmobile\\Documents\G\itHub\\AUTOMACAOLOJA\\AUTOMACAO-PEDIDO-WEB\\output"';


module.exports = {

    AbrirAllure() {

        exec(allureServeCommand, (error, stdout, stderr) => {
            if (error) {
              console.error(`Erro ao abrir o Allure Serve: ${error.message}`);
              return;
            }
            console.log(stdout);
          });

    }

}

   






