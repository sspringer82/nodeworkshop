import { Router } from 'express';
import addressController from './address.controller';
import addressService from './address.service';

const addressRouter = Router();

// addressRouter.use('/:id', (req, res, next) => {
//   console.log(req.params.id);
//   if (req.params.id) {
//     console.log('xxx1');
//     req.params.numId = parseInt(req.params.id, 10) as any; // @todo remove any
//   }
//   next();
// });

addressRouter.get('/', addressController.getAll);
addressRouter.get('/:id', addressController.getOne);
addressRouter.delete('/:id', addressController.delete);

addressRouter.post('/', (req, res) => {
  res.json([]);
});
addressRouter.put('/:id', (req, res) => {
  res.json([]);
});

export default addressRouter;
