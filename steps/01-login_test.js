
const { Login } = require("../pages/login_page");

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

Feature('login').tag('Login');

const { I } = inject()

const CNPJ_CORRETO = '00409260000115'
const SENHA_CORRETA = '48303523'
const CNPJ_INVALIDO = '000000000000'
const SENHA_INVALIDA = '000000'
const Telefone = '48000000000'
const Email = 'teste.teste@gmail.com'
const Razao_Social = 'RazaoTeste'
const Nome_Fantasia = 'FantasiaTeste'

const Nome_Contato_Financeiro = '/html/body/my-app/cadastro-novo-cliente-component/div/div/div/form/div[1]/div[4]/div[2]/mat-form-field[1]/div/div[1]/div/input'
const Email_Financeiro = '/html/body/my-app/cadastro-novo-cliente-component/div/div/div/form/div[1]/div[4]/div[2]/mat-form-field[2]/div/div[1]/div/input'
const Numero_Financeiro = '/html/body/my-app/cadastro-novo-cliente-component/div/div/div/form/div[1]/div[4]/div[2]/mat-form-field[3]/div/div[1]/div/input'


const Email_Compras = '/html/body/my-app/cadastro-novo-cliente-component/div/div/div/form/div[1]/div[4]/div[4]/mat-form-field[2]/div/div[1]/div/input'
const Nome_Contato_Compras = '/html/body/my-app/cadastro-novo-cliente-component/div/div/div/form/div[1]/div[4]/div[4]/mat-form-field[1]/div/div[1]/div/input'
const Numero_compras = '/html/body/my-app/cadastro-novo-cliente-component/div/div/div/form/div[1]/div[4]/div[4]/mat-form-field[3]/div/div[1]/div/input'


Before(() => {

  //VOU PARA PAGINA "LOGIN"
  I.amOnPage(Pagina_Login_Wildfly1)
  //CASO DE PROBLEMA DE SEGURANÇA, APERTA EM MODO AVANÇADO E COTNINUA
  tryTo(() => I.waitForText('Avançado'))
  tryTo(() => I.click('Avançado'))
  tryTo(() => I.click('Ir para 192.168.1.236 (não seguro)'))
  I.wait(5)

})


Scenario('Aba "Já Sou cliente" ', () => {


  //EU VOU PARA PAGINA "JÁ SOU CLIENTE"
  I.click('/html/body/my-app/login-component/div/div[1]/div/form/div[2]/button[1]')

  //EU PREENCHO OS CAMPOS COM OS DADOS
  I.fillField('Razão Social', Razao_Social)
  I.fillField('CNPJ', CNPJ_CORRETO)
  I.fillField('Telefone', Telefone)
  I.fillField('E-mail', Email)

  //EU APERTO O reCAPTCH PRA ENVIAR O FORMULARIO.
  // 
  //
  //

}).tag('@JaSouCliente')


Scenario('Aba "Quero ser cliente" ', () => {


  //VOU PARA ABA "QUERO SER CLIENTE"
  I.click('Quero ser cliente')

  //EU PREENCHO OS CAMPOS COM OS DADOS

  //ADICIONO A RAZAO SOCIAL
  I.fillField('Razão Social', Razao_Social)
  //ADICIONO O CNPJ
  I.fillField('CNPJ', '0000000000000')
  //ADICIONO O TELEFONE
  I.fillField('Telefone', Telefone)
  //ADICIONO A INSCRIÇÃO ESTADUAL 
  I.fillField('Inscrição Estadual', '120000000')
  //ADICIONO O E-MAIL NFe
  I.fillField('E-mail NFe', 'Email.nfeTeste@gmail.com')
  //ADICIONO AO NOME FANTASIA 
  I.fillField('Nome Fantasia', Nome_Fantasia)

  // //EU SELECIONO O ESTADO DO AMAZONAS
  // I.click('UF')
  // I.click('/html/body/div[1]/div[3]/div/div/mat-option[2]')

  //DADOS DO FINANCEIRO

  //ADICIONO O EMAIL DO FINANCEIRO
  I.fillField(Email_Financeiro, Email)
  //ADICIONO O NOME DO CONTADO DO FINANCEIRO
  I.fillField(Nome_Contato_Financeiro, 'NomeFinanceiro')
  //ADICIONO AO NUMERO DE TELEFONE DO FINANCEIRO
  I.fillField(Numero_Financeiro, '48900000000')
  //CLICO NO BOTAO "AUTORIZADO A COMPRAR"
  I.click('Autorizado a comprar')

  //DADOS DO COMPRAS

  //ADICIONO O EMAIL DO COMPRAR
  I.fillField(Email_Compras, Email)
  //ADICIONO O NOME DO CONTADO DO COMPRAS
  I.fillField(Nome_Contato_Compras, 'NomeCompras')
  //ADICIONO AO NUMERO DE TELEFONE DO COMPRAR
  I.fillField(Numero_compras, '48900000000')

  //DOU UM SCROL PARA BAIXO 
  I.scrollPageToBottom()

  //COLOCO ADICIONO OS FORNECEDORES ATUAIS
  I.fillField('/html/body/my-app/cadastro-novo-cliente-component/div/div/div/form/div[1]/div[4]/div[8]/div[2]/input', 'FORNECEDOR TESTE ')
  I.fillField('/html/body/my-app/cadastro-novo-cliente-component/div/div/div/form/div[1]/div[4]/div[8]/div[3]/input', ' FORNECEDOR TESTE ')
  I.fillField('/html/body/my-app/cadastro-novo-cliente-component/div/div/div/form/div[1]/div[4]/div[8]/div[4]/input', 'FORNECEDOR TESTE ')

  //ADICIONO NA AREA TEXTO OS ITENS QUE EU QUERO.
  I.fillField('/html/body/my-app/cadastro-novo-cliente-component/div/div/div/form/div[1]/div[4]/div[10]/mat-form-field/div/div[1]/div/textarea', 'Maquinas de testes')

  //ADICIONO QUAL O CANAL DE ATENDIMENTO 
  I.click('Quero comprar presencialmente pelo representante comercial')
  I.click(' Quero comprar pelo televendas via WhatsApp, e-mail e telefone')
  I.click('Quero comprar online pelo site ou aplicativo')

  //DOU UM SCROL PARA BAIXO 
  I.scrollPageToBottom()

  //SELECIONO QUAL REDE SOCIAL EU CONHECI A REZZADORI
  I.click('Instagram')
  I.click('Site')
  I.click('Visita')
  I.click('Google')

  I.click('Indicação')
  I.waitForText('Digite a indicação de como nos conheceu*')
  I.fillField('/html/body/my-app/cadastro-novo-cliente-component/div/div/div/form/div[1]/div[7]/div[2]/mat-radio-group/div[5]/input', 'TESTE PELO GOOGLE')

  I.click('Outro')
  I.waitForText('Digite o outro meio de como nos conheceu*')
  I.fillField('/html/body/my-app/cadastro-novo-cliente-component/div/div/div/form/div[1]/div[7]/div[2]/mat-radio-group/div[6]/input', 'TESTE PELO GOOGLE')

  I.saveScreenshot('@QueroSerCliente.png')

  //AQUI PRECISA VALIDAR O reCAPTCHA PRA PODER ENVIAR O FORMULARIO.
  //
  //
  //
  // 

}).tag('@QueroSerCliente')


Scenario('Aba "Esqueci a senha" ', () => {


  //VOU PARA ABA "ESQUECI MINHA SENHA "
  I.click('Esqueci minha senha')
  I.fillField('CNPJ', CNPJ_CORRETO)
  I.fillField('E-mail', Email)



  // PRECISA VALIDAR O reCAPTCHA AQUI
  //
  //
  //

}).tag('@EsqueciMinhaSenha')



Scenario('Login com CNPJ Inválido', () => {

  //FAÇO LOGIN COM CNPJ INVÁLIDO.
  Login(CNPJ_INVALIDO, SENHA_CORRETA)
  I.waitForText('Cliente não cadastrado.')

  //SALVO UMA PRINTSCREEN APENAS PARA IR PRO OUTPUT, CASO EU QUEIRA VERIFICAR O PASSO A PASSO
  I.saveScreenshot('@LoginCNPJinvalido.png')

}).tag('@LoginCNPJinvalido')



Scenario('Login com Senha Inválida', () => {

  //FAÇO LOGIN COM A SENHA INVALIDA.
  Login(CNPJ_CORRETO, SENHA_INVALIDA)
  I.waitForText('Senha inválida.')

  I.saveScreenshot('@LoginSenhaInvalida.png')

}).tag('@LoginSenhaInvalida')



Scenario('Login Correto', () => {

  //FAÇO LOGIN COM OS DADOS CORRETOS.
  Login(CNPJ_CORRETO, SENHA_CORRETA)
  I.waitForText('08070', 10)

  I.saveScreenshot('@LoginCorreto.png')

}).tag('@LoginCorreto')

Scenario('Logout', () => {

  //FAÇO LOGIN COM OS DADOS CORRETOS.
  Login(CNPJ_CORRETO, SENHA_CORRETA)

  //ESPERO PELA ABA "PRODUTOS"
  I.waitForText('08070', 10)

  //CLICO NO BOTAO DE MENU 
  I.click('/html/body/my-app/home-component/mat-toolbar/mat-toolbar-row[1]/button')

  //CLICO NO BOTAO SAIR
  I.waitForText('SAIR', 10)
  I.click('/html/body/my-app/home-component/mat-sidenav-container/mat-sidenav/mat-nav-list/a[7]/div')

  //AGUARDO PELO INPUT "CNPJ" NA ABA LOGIN
  I.waitForText('CNPJ', 5)

  I.saveScreenshot('@Logout.png')

}).tag('@Logout')
