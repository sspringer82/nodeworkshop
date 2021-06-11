import { Address } from './Address';

let addresses: Address[] = [
  {
    id: 1,
    firstname: 'Klaus',
    lastname: 'Müller',
    email: 'klaus@müller.com',
  },
];

const addressService = {
  getAll(): Promise<Address[]> {
    return Promise.resolve(addresses);
  },
  getById(id: number): Promise<Address | undefined> {
    return Promise.resolve(addresses.find((a) => a.id === id));
  },
  delete(id: number): void {
    addresses = addresses.filter((a) => a.id !== id);
  },
};

export default addressService;
