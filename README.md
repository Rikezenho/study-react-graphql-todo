# React + GraphQL + Mongoose To-do

Um simples to-do utilizando React, React Hooks, GraphQL e Mongoose, conectado a um banco do MLab.

---

## Instalação

O projeto é separado em API back-end com GraphQL e Mongoose, e um front-end em React.

Sendo assim, clone o projeto em sua máquina e dentro da pasta `backend` crie um arquivo `.env` com as seguintes variáveis (apontando para os dados do seu banco de dados MongoDB):
```
MONGODB_HOST=ds245677.mlab.com:45677/todo-graphql
MONGODB_USERNAME=<username>
MONGODB_PASSWORD=<password>
```

Depois, utilizando Node.js 8+ e Yarn, rode o comando:

```
yarn
```

Para instalar todas as dependências utilizando Yarn Workspaces.

Para rodar o projeto:
```
yarn dev
```

Para buildar o projeto:
```
yarn build
```

Para testes unitáros:
```
yarn test
```