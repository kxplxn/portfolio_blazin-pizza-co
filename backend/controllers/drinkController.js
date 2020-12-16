import mongoose, { Types } from 'mongoose';
import DrinkSchema from '../models/drinkModel';

const Drink = mongoose.model('Drink', DrinkSchema);

export const getAllDrinks = (_req, res) => {
  Drink.find({}, (err, drinks) => (
    err ? res.send(err) : res.json(drinks)
  ));
};

export const getDrinkById = (req, res) => {
  Drink.findOne({ _id: new Types.ObjectId(req.params.drinkId) }, (err, drink) => (
    err ? res.send(err) : res.json(drink)
  ));
};
