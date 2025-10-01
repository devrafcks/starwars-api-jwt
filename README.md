# Star Wars API

API Node.js para consumo de personagens da SWAPI, com autenticação JWT, documentação Swagger e testes com Jest.

## Descrição

Esta API permite registrar usuários, realizar login e acessar informações de personagens de Star Wars de forma protegida via token JWT.  
A API possui documentação interativa através do Swagger UI e testes automatizados utilizando Jest e Supertest.

## Funcionalidades

- Registro de usuários (`/auth/register`)
- Login e geração de token JWT (`/auth/login`)
- Consulta de personagens da SWAPI (`/starwars/character/{id}`)
- Middleware de autenticação JWT
- Documentação Swagger em `/api-docs`
- Testes automatizados com Jest e Supertest

## Tecnologias Utilizadas

- Node.js (ES Modules)
- Express
- JWT (jsonwebtoken)
- Bcrypt
- Node-fetch
- Swagger UI Express
- Jest e Supertest para testes

## Estrutura do Projeto

- `src/`
  - `app.js` – configurações do Express
  - `server.js` – inicialização do servidor
  - `routes/` – definição das rotas (`authRoutes.js`, `starwarsRoutes.js`)
  - `controllers/` – lógica dos endpoints (`authController.js`, `starwarsController.js`)
  - `services/` – comunicação com a SWAPI (`starwarsService.js`)
  - `middleware/` – autenticação JWT (`auth.js`)
- `tests/` – testes automatizados (`auth.test.js`, `starwars.test.js`)
- `swagger.json` – documentação da API

## Como Utilizar

- Abra a documentação Swagger em `/api-docs` para visualizar todas as rotas e testar de forma interativa.
- Para acessar rotas protegidas, é necessário realizar login e obter um token JWT.
- Insira o token no Swagger clicando em **Authorize** e utilizando o formato `Bearer SEU_TOKEN_AQUI`.

