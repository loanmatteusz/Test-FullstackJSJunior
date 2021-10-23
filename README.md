## Installation

```bash
$ yarn
```

## Running the app

```bash
# up app and database with docker
$ docker-compose up
```

## Swagger Route

```bash
# route to use swagger doc
$ http://localhost:3000/docs
```

---

# Contele fullstack-junior
## Sobre nós
Empresa do ramo de tecnologia, com forte atuação no mercado nacional em processo expansão Internacional. Projeto fixo, não é temporário. Projetos desafiadores e oportunidade de crescimento.

Confira um vídeo com uma explicação melhor sobre a empresa: https://youtu.be/GusemhFLxMo

### O objetivo deste teste é avaliar seus conhecimentos: 
- Em organização
- Boas práticas e suas habilidades de programação.
- Qualidade de código.

## TESTE
##### Criar um serviço de API RESTFUL usando nodejs express
- Criar 4 endpoints GET/POST/PUT/DELETE
- Documentação utilizando swagger.
- docker/compose.
- postgres.

### Premissas
- JAVASCRIPT.
- Salvar (email, senha).
- Cada usuário deverá ter um ID único
- Gravar as informações no banco.
- Ter cuidado com validações.
- Knex
- Express
- Postgres

### Documentação
HTTP | ROUTE | BODY | DESCRIÇÃO |
| --- | ------ | ------ |  ------ |
| GET | /api/v1/users |  | Listar todos usuarios
| GET | /api/v1/users/user_id | | Listar único usuário
| POST | /api/v1/users | JSON (email,senha) | Criar único usuário
| PUT | /api/v1/users/user_id | JSON (email,senha) | Alterar único usuário
| DELETE | /api/v1/users | | Deletar todos usuarios
| DELETE | /api/v1/users/user_id | | Deletar único usuário

---