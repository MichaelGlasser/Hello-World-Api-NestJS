import { Test, TestingModule } from '@nestjs/testing';
import { HelloCrudRoutes } from '../../../src/routes/hello-crud-routes';
import { HelloCrudService } from '../../../src/services/hello-crud-service';

describe('HelloCrudRoutes', () => {
  let helloWorldController: HelloCrudRoutes;
  let helloWorldService: HelloCrudService;

  beforeEach(async () => {
    const helloWorldTestingModule: TestingModule = await Test.createTestingModule({
      controllers: [HelloCrudRoutes],
      providers: [HelloCrudService]
    }).compile();

    helloWorldController = helloWorldTestingModule.get<HelloCrudRoutes>(HelloCrudRoutes);
    helloWorldService = helloWorldTestingModule.get<HelloCrudService>(HelloCrudService);
  });

  describe('/hello GET', () => {
    it('should call helloCrudService.getAll()', () => {
      const getAllMock = jest.spyOn(helloWorldService, 'getAll').mockImplementation(() => null);

      helloWorldController.getAll();
      expect(getAllMock).toBeCalled;
    });
  });

  describe('/hello POST', () => {
    it('should call helloCrudService.post()', () => {
      const fakeRequestBody = {};
      const createMock = jest.spyOn(helloWorldService, 'create').mockImplementation(requestBody => null);

      helloWorldController.post(fakeRequestBody);
      expect(createMock).toBeCalled;
    });
  });

  describe('/hello DELETE', () => {
    it('should call helloCrudService.delete()', () => {
      const deleteMock = jest.spyOn(helloWorldService, 'delete').mockImplementation(() => null);

      helloWorldController.delete();
      expect(deleteMock).toBeCalled;
    });
  });

  describe('/hello/:id GET', () => {
    it('should call helloCrudService.getSingle()', () => {
      const fakeId = '0';
      const getSingleMock = jest.spyOn(helloWorldService, 'getSingle').mockImplementation(id => null);

      helloWorldController.getSingle(fakeId);
      expect(getSingleMock).toBeCalled;
    });
  });
});
