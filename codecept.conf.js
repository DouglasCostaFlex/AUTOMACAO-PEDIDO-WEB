const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */

exports.config = {

  //COMENTE E DESCOMENTE QUAL AUTOMAÇÃO VOCE QUER RODAR ABAIXO

  //AUTOMAÇÃO CHAMADOS DE INCONFORMIDADES
  // tests: './autChamados/ChamadosDeInconformidades/*_Chamadostest.js',

  //AUTOMAÇAO CHAMADOS DE MELHORIAS
  // tests: './autChamados/ChamadosDeMelhorias/*_Chamadostest.js',

  //AUTOMAÇÃO LOJA
  tests: './steps/*_test.js',

  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://192.168.1.236:9090/pedidoweb/login',
      browser: 'chrome',
      restart: false,
      autoGrantPermissions: true,
      noReset: true,
      resetOnSessionStartOnly: false
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/Login.js",

    pedidoPage: "./pages/pedido.js",

    comandosBancoPage: "./pages/ComandosBanco.js",

    linksExternosPage: "./pages/LinksExternos.js",
  },
  name: 'LOJA',

  plugins: {

    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',

    },
  }


}