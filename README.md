Instalação de dependências
- yarn init -yarn
- yarn add express
- yarn add @types/express -d
- yarn add typescript -d

Inicializar o typescript
yarn tsc --init
yarn tsc <!--Converter o codigo para um codigo mais amigavel "JavaScript"-->

Quando executa o TS ele criar um novo arquivo JS.
Para isto tem que mudar as configirações do tsconfig.json e informar uma pasta para onde será direicionado os arquivos. -->


Eslint 
Com ele conseguimos automatizar os padrões de códigos do nosso projeto, e podemos utiliza-lo para projetos em NodeJS, ReactJS e React Native.

yarn add eslint -d
yarn eslint --init

Link
ESLint e Prettier - Trilha Node.js

https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779#340924d1619d48ec8e8220569f298616

 Depurando aplicação 
- Clicar em [Executar e Depurar], e criar launch.json.
- Mudar as configurações do launch.json
            "type": "node",
            "request": "attach", 

- Alterar as configurações do package.json, adicionando o --inspect

 "scripts": {
      "dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts"
  }