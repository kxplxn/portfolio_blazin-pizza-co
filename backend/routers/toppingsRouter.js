import express from 'express';
import {
  getToppings,
  getToppingById,
} from '../controllers/toppingController';

const toppingsRouter = express.Router();

toppingsRouter.get('/', getToppings);
toppingsRouter.get('/:toppingId', getToppingById);

export default toppingsRouter;
