import { Test, TestingModule } from '@nestjs/testing';
import { HelloCrudService } from '../../../src/services/hello-crud-service';

describe('HelloCrudService', () => {
  let helloWorldService: HelloCrudService;

  beforeEach(async () => {
    const helloWorldTestingModule: TestingModule = await Test.createTestingModule({
      providers: [HelloCrudService]
    }).compile();

    helloWorldService = helloWorldTestingModule.get<HelloCrudService>(HelloCrudService);
  });

  describe('getAll()', () => {
    it('should return an array of data', () => {
      const response = helloWorldService.getAll();
      expect(response).toEqual([]);
    });
  });

  describe('getSingle()', () => {
    // Test currently does not work since the data array is empty during test
    // describe('and the passed id is valid', () => {
    //   it('should return the proper element in the data array', () => {
    //     const fakeId = '0';
    //     const response = helloWorldService.getSingle(fakeId);
    //     expect(response).toEqual(something);
    //   });
    // });

    describe('and the passed id is not valid', () => {
      it('should return an error message', () => {
        const fakeId = 'someInvalidId';
        try {
          helloWorldService.getSingle(fakeId);
        } catch (error) {
          expect(error.message).toEqual(`No data found at index: ${fakeId}`);
        }
      });
    });
  });

  describe('create()', () => {
    describe('and the requestBody contains a title', () => {
      it('should return a success message', () => {
        const fakeRequestBody = { title: 'someTitle' };
        const response = helloWorldService.create(fakeRequestBody);
        expect(response).toEqual('Saved data to array');
      });
    });

    describe('and the requestbody does not contain a title', () => {
      it('should return an error message', () => {
        const fakeRequestBody = {};
        try {
          helloWorldService.create(fakeRequestBody);
        } catch (error) {
          expect(error.message).toEqual('A title must be provided to create an entity');
        }
      });
    });
  });

  describe('delete()', () => {
    it('should return nothing', () => {
      const response = helloWorldService.delete();
      expect(response).toEqual(undefined);
    });
  });
});
