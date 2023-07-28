---------------------------------------------
## PARA RODAR AUTOMAÇAO USE O COMANDO 

1 - npx selenium-standalone start  -> PARA FAZER QUE CONECTE COM O SELENIUM   E DEPOIS O COMANDO 

2 - npx codeceptjs run --steps   PARA RODAR OS CENARIOS 

## PARA RODAR A AUTOMAÇAO POR STEPS USE O COMANDO 

npx codeceptjs run --steps --grep "@EsqueciMinhaSenha"   USE A TAG QUE VOCE QUER.

-----------------------------------------------
## PARA RODAR A AUTOMAÇAO COM O ALLURE MOCHA 

no cmd do rode o comando  allure serve C:\Users\flexmobile\Desktop\LOJA\output   <-- COLOQUE O LOCAL DO CAMINHO ONDE SAI OS OUTPUT NO SEU COMPUTADOR.

e rode o comando  npx codeceptjs run --steps na automaçao    <<-- Quando finalizar vai estar no server do allure;.

----------------------------------------------------------------