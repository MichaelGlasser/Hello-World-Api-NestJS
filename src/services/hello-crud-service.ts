import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class HelloCrudService {
  private data = [];

  getAll(): any {
    return this.data;
  }

  getSingle(index: string): any {
    if(this.data[parseInt(index, 10)]) {
      return this.data[parseInt(index, 10)];
    }
    throw new HttpException(`No data found at index: ${index}`, HttpStatus.BAD_REQUEST);
  }

  create(requestBody): string {
    if(requestBody.title) {
      this.data.push({ title: requestBody.title });
      return 'Saved data to array'
    }
    throw new HttpException('A title must be provided to create an entity', HttpStatus.BAD_REQUEST);
  }

  delete(): any {
    this.data = [];
  }
}
