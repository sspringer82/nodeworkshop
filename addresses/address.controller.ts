import addressService from './address.service';

class AddressController {
  async getAll(req: any, res: any) {
    const addresses = await addressService.getAll();
    res.json(addresses);
  }
  async getOne(req: any, res: any) {
    const id = parseInt(req.params.id, 10);
    const address = await addressService.getById(id);
    res.json(address);
  }
  delete(req: any, res: any) {
    const id = parseInt(req.params.id, 10);
    addressService.delete(id);
  }
}

const addressController = new AddressController();
export default addressController;
