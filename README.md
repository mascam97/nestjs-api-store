# Nestjs API Store ![Stable](https://img.shields.io/badge/stable-1.1.0-blue) ![Status](https://img.shields.io/badge/status-refactoring-yellow) ![Passing](https://img.shields.io/badge/build-passing-green) ![Coverage](https://img.shields.io/badge/coverage-33%-red) ![Docker build](https://img.shields.io/badge/docker_build-passing-green)

_Minimal store products_

## Project goal :goal_net:

**June 2022**: Personal project to learn **JavaScript as Backend with Nestjs and TypeScript**.

## Achievements June 2022 :star2:

As Backend with **PHP - Laravel** I knew about APIs. So I developed the project by following some online courses, where I achieved:

- Implemented Validations, Services, environment variables, documentation with **Swagger** and more
- Configured **NoSQL with MongoDB for the Database** and **Mongoose as a ODM**
- Implemented **Authentication with Passport.js - JWT**
- Implemented **Authorization with Guards**
- Added some **e2e Testing** for basic features

Then I made a [Project definition](project.definition.md) to define the main business logic with a scope that allows scalability. Defining only the necessary resources to fit the **Project goal**.

### TODOS

- **Improve testing e2e**: Add fixtures to make some data, test for seller and administrator role
- **Add unit testing**: There are some files made by default for some components, these does not work
- **Add Continuous Integration**: Add some GitHub Actions for the testing
- **Add Docker container for the Nodejs project**: The project is run in a local environment, it should in a container as database in a the same network

## Getting Started :rocket:

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites :clipboard:

The programs you need are:

- Nodejs v16.14.2
- NPM v8.5.0
- [Docker](https://www.docker.com/get-started).
- [Docker compose](https://docs.docker.com/compose/install/).

### Installing 🔧

First duplicate the file .env.example as .env.

```
cp .env.example .env
```

Then install the JavaScript dependencies:

```
npm install
```

Create the images and run the services (MongoDB and MongoExpress):

```
docker compose up
```

Create a database called `nestjs-store` in Mongo Express from 8081 (http://localhost:8081/).

Finally, defines an `API_KEY` in .env file and run the server

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
NODE_ENV=stag npm run start:dev

# production mode
$ npm run start:prod
NODE_ENV=prod npm run start:dev

```

---

## Testing

There are a special container for testing, the following commands are used to manage it

```bash
$ npm run db:test:up

$ npm run db:test:rm

$ npm run db:test:restart
```

Note: there are a `.env.test` file with the credentials for that testing database

Finally run the e2e testing with

```bash
$ npm run test:e2e
```

---

### Built With 🛠️

- [Nestjs](https://nestjs.com/): A progressive Node.js framework
- [Swagger](https://swagger.io/): API Documentation & Design Tools for Teams
- [Passport.js with Nestjs](https://docs.nestjs.com/security/authentication): Authentication middleware for Node.js
- [Mongoose with Nestjs](https://docs.nestjs.com/techniques/mongodb): Elegant mongodb object modeling for node.js
- [PactumJS](https://pactumjs.github.io/): Free & OpenSource REST API Testing Tool for all levels in a Test Pyramid

### Authors

-   Martín S. Campos - [mascam97](https://github.com/mascam97)

### Contributing

You're free to contribute to this project by submitting [issues](https://github.com/mascam97/nestjs-api-store/issues) and/or [pull requests](https://github.com/mascam97/nestjs-api-store/pulls).

### References :books:

- [NestJs Course for Beginners - Create a REST API > e2e tests with pactumJs](https://youtu.be/GHTA143_b-s?t=8848)
- [NestJS Course: Authentication with Passport and JWT](https://platzi.com/cursos/nestjs-auth/)
- [NestJS Course: Data Persistence with MongoDB](https://platzi.com/cursos/nestjs-mongodb/)
- [NestJS Course: Modular Programming, Documentation with Swagger and Deploy](https://platzi.com/cursos/nestjs-modular/)
- [Backend with Nestjs Course](https://platzi.com/cursos/nestjs/)
- [Postman Course](https://platzi.com/clases/postman/)
- [API REST Course](https://platzi.com/clases/api-rest/)
- [Backend Architecture Practical Course](https://platzi.com/cursos/practico-backend/)
