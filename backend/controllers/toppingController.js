import mongoose, { Types } from 'mongoose';
import ToppingSchema from '../models/toppingModel';

const Topping = mongoose.model('Topping', ToppingSchema);

export const getToppings = (_req, res) => {
  Topping.find({}, (err, toppings) => (
    err ? res.send(err) : res.json(toppings)
  ));
};

export const getToppingById = (req, res) => {
  Topping.findOne({ _id: new Types.ObjectId(req.params.toppingId) }, (err, topping) => (
    err ? res.send(err) : res.json(topping)
  ));
};
