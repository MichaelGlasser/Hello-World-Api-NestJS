import { Test, TestingModule } from '@nestjs/testing';
import { HelloCrudRoutes } from './routes/hello-crud-routes';
import { HelloCrudService } from './services/hello-crud-service';

describe('AppController', () => {
  let appController: HelloCrudRoutes;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloCrudRoutes],
      providers: [HelloCrudService],
    }).compile();

    appController = app.get<HelloCrudRoutes>(HelloCrudRoutes);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getAll()).toBe('Hello World!');
    });
  });
});
