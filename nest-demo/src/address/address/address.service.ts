import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService {
  getAll() {
    return Promise.resolve([
      {
        id: 1,
        firstname: 'Klaus',
        lastname: 'Müller',
        email: 'klaus@müller.com',
      },
    ]);
  }
}
