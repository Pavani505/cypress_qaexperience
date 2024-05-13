# cypress_qaexperience
Treinamento de cypress mais completo

1 - yarn init ou npm init

2 - yarn add cypress -D

<!-- 3 - npm install -g npm@10.7.0 -->

3 - yarn cypress open







# -------------------------
Executando o banco de dados

Dentro do diretorio apps/markL/api
npm run db:init
npm run dev --> Rodar sempre que desligar o PC pra startar o servidor local

Executando app web

Dentro do diretorio apps/markL/web
npm install
npm run dev --> Rodar sempre que desligar o PC pra startar o servidor local

# instalando biblioteca faker

yarn add @faker-js/faker --dev
yarn remove @faker-js/faker

# Executando em background
yarn cypress run


# Instalando relatorio allure
https://github.com/shelex/cypress-allure-plugin

yarn add -D @shelex/cypress-allure-plugin

yarn add allure-commandline -D

yarn cypress run --env allure=true
yarn allure serve

