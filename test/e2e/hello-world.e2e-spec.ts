import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { HelloWorldApp } from '../../src/hello-world.module';

const testRequest = { title: 'someTitle' };
const testEntity = { title: 'someTitle' };

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HelloWorldApp],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/hello GET - 1', () => {
    it('should return an empty data array', () => {
      return request(app.getHttpServer())
        .get('/hello')
        .expect(200)
        .expect([]);
    });
  });

  describe('/hello POST', () => {
    it('should create an entity', () => {
      return request(app.getHttpServer())
        .post('/hello')
        .send(testRequest)
        .expect(201);
    });
  });

  describe('/hello/:id GET', () => {
    it('should return a single entity from the data array', () => {
      return request(app.getHttpServer())
        .get('/hello/0')
        .expect(200)
        .expect(res => {
          expect(res.body).toEqual(testEntity);
        });
    });
  });

  describe('/hello DELETE', () => {
    it('should return an empty data array', () => {
      return request(app.getHttpServer())
        .delete('/hello')
        .expect(204)
    });

    it('and /hello/:id GET should fail because the entity is gone', () => {
      return request(app.getHttpServer())
        .get('/hello/0')
        .expect(404);
    });

    it('and /hello GET should return an empty data array because the entity is gone', () => {
      return request(app.getHttpServer())
        .get('/hello')
        .expect(200)
        .expect([]);
    });
  });
});
