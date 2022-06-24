# Nest API Store

_Store of products for a little grocery stores_

## Project goal :goal_net:

**June 2022**: Personal project to learn **JavaScript as Backend with TypeScript and Nestjs**.

### Achievements June 2022 :star2:

As Backend with **PHP - Laravel** I knew everything about an API. So I developed fastly the project by following some online courses, where I achieved:

- Implemented Validations, Services, environment variables, documentation with **Swagger** and more
- Configured **NoSQL with MongoDB for the Database** and **Mongoose as a ODM**
- Implemented **Authentication with Passport.js - JWT**
- Implemented **Authorization with Guards**

### TODOS

**As Backend Developer with experience** I just limited myself to follow the courses and learned, so the project is not stable, and for make it stable I needed first:

- **Project definition**: The course create models like brands, categories, users and roles, it defined its own business logic for learning porpuse. From my experience this **business logic should be well defined with a scope that allows scalability**
- **Testing**: The course just got focused on learning porpuse, everything was tested from Postman despite **in a professional work Test-Driven Development is used**. From my experience, everything must have testing to garantee the functionality and not spend so much time in testing from Postman
- **Project scope**: A personal project should have a defined goal with its scope

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

Create a database called `nest-api-store` in Mongo Express from 8081 (http://localhost/).

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

TODO

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

---

### Built With 🛠️

- [Nestjs](https://nestjs.com/): A progressive Node.js framework
- [Swagger](https://swagger.io/): API Documentation & Design Tools for Teams
- [Passport.js with Nestjs](https://docs.nestjs.com/security/authentication): Authentication middleware for Node.js
- [Mongoose with Nestjs](https://docs.nestjs.com/techniques/mongodb):elegant mongodb object modeling for node.js

### Authors

-   Martín S. Campos - [mascam97](https://github.com/mascam97)

### Contributing

You're free to contribute to this project by submitting [issues](https://github.com/mascam97/nestjs-api-store/issues) and/or [pull requests](https://github.com/mascam97/nestjs-api-store/pulls).

### References :books:

- [NestJS Course: Authentication with Passport and JWT](https://platzi.com/cursos/nestjs-auth/)
- [NestJS Course: Data Persistence with MongoDB](https://platzi.com/cursos/nestjs-mongodb/)
- [NestJS Course: Modular Programming, Documentation with Swagger and Deploy](https://platzi.com/cursos/nestjs-modular/)
- [Backend with Nestjs Course](https://platzi.com/cursos/nestjs/)
- [Postman Course](https://platzi.com/clases/postman/)
- [API REST Course](https://platzi.com/clases/api-rest/)
- [Backend Architecture Practical Course](https://platzi.com/cursos/practico-backend/)
