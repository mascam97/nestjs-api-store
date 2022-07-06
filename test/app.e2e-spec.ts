import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as pactum from 'pactum';
import { AppModule } from './../src/app.module';

import { RegisterUserDto } from './../src/users/dtos/user.dto';
import { CreateOrderDto } from './../src/users/dtos/order.dto';

// TODO: Improve test, add fixtures and improve business logic

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);

    pactum.request.setBaseUrl('http://localhost:3333');
  });

  afterAll((done) => {
    // TODO: Error, async operations kept running
    app.close();
    done();
  });

  describe('Authentication as customer', () => {
    const registerDto: RegisterUserDto = {
      email: 'test@mail.com',
      password: '123456',
      role: 'customer',
    };

    describe('Register', () => {
      it('should throw if email empty', () => {
        return pactum
          .spec()
          .post('/auth/register')
          .withBody({
            password: registerDto.password,
          })
          .expectStatus(400);
      });
      it('should throw if password empty', () => {
        return pactum
          .spec()
          .post('/auth/register')
          .withBody({
            email: registerDto.email,
          })
          .expectStatus(400);
      });
      // it('should register', () => {
      //   return pactum
      //     .spec()
      //     .post('/auth/register')
      //     .withBody({
      //       email: dto.email,
      //       password: dto.password,
      //     })
      //     .expectStatus(201);
      // });
    });

    describe('Login', () => {
      it('should throw if email empty', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({
            password: registerDto.password,
          })
          .expectStatus(401);
      });
      it('should throw if password empty', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({
            email: registerDto.email,
          })
          .expectStatus(401);
      });
      it('should login', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({
            email: registerDto.email,
            password: registerDto.password,
          })
          .expectStatus(201)
          .stores('userAuth', 'access_token')
          .stores('userId', 'user._id');
      });
    });

    describe('Products as customer', () => {
      it('should list products', () => {
        return pactum
          .spec()
          .get('/products')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(200)
          .expectBody([]);
      });
      it('should show products 404', () => {
        return pactum
          .spec()
          .get('/products/507f191e810c19729de860ee')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(404);
      });
      it('should not create products 403', () => {
        return pactum
          .spec()
          .post('/products')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(403);
      });
      it('should not update products 403', () => {
        return pactum
          .spec()
          .put('/products/507f191e810c19729de860ee')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(403);
      });
      it('should not delete products 403', () => {
        return pactum
          .spec()
          .delete('/products/507f191e810c19729de860ee')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(403);
      });
    });

    describe('Users as customer', () => {
      it('should not list users', () => {
        return pactum
          .spec()
          .get('/users')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(403);
      });
      it('should not show user', () => {
        return pactum
          .spec()
          .get('/users/507f191e810c19729de860ee')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(403);
      });
      it('should not create user', () => {
        return pactum
          .spec()
          .post('/users')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(403);
      });
      it('should not delete user', () => {
        return pactum
          .spec()
          .delete('/users/507f191e810c19729de860ee')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(403);
      });
    });

    describe('Orders as customer', () => {
      // TODO: Fix it
      // const registerDto: CreateOrderDto = {
      //   user: '$S{userAuth}',
      //   date: Date.now,
      //   products: [],
      // };

      it('should list orders', () => {
        return pactum
          .spec()
          .get('/orders')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(200)
          .expectBody([]);
      });
      it('should show orders 404', () => {
        return pactum
          .spec()
          .get('/orders/507f191e810c19729de860ee')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(404);
      });
      it('should throw if data empty', () => {
        return pactum
          .spec()
          .post('/orders')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(400);
      });
      // it('should create orders', () => {
      //   return pactum
      //     .spec()
      //     .post('/orders')
      //     .withBody({
      //       user: '$S{userId}',
      //       date: '2022-06-01',
      //       products: [],
      //     })
      //     .withHeaders({
      //       Authorization: 'Bearer $S{userAuth}',
      //     })
      //     .expectStatus(201);
      // });
      it('should not update orders', () => {
        return pactum
          .spec()
          .put('/orders/507f191e810c19729de860ee')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(400);
      });
      it('should delete orders', () => {
        return pactum
          .spec()
          .delete('/orders/507f191e810c19729de860ee')
          .withHeaders({
            Authorization: 'Bearer $S{userAuth}',
          })
          .expectStatus(404);
      });
    });
  });
});
