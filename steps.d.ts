/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./pages/Login.js');
type pedidoPage = typeof import('./pages/pedido.js');
type comandosBancoPage = typeof import('./pages/ComandosBanco.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, pedidoPage: pedidoPage, comandosBancoPage: comandosBancoPage }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
