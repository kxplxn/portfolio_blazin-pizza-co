/* eslint-disable no-console */
import mongoose from 'mongoose';

import ToppingSchema from '../models/toppingModel';
import SideSchema from '../models/sideModel';
import DrinkSchema from '../models/drinkModel';

import toppings from './data/toppings';
import sides from './data/sides';
import drinks from './data/drinks';

const Topping = mongoose.model('Topping', ToppingSchema);
const Side = mongoose.model('Side', SideSchema);
const Drink = mongoose.model('Drink', DrinkSchema);

mongoose.connect(
  process.env.MONGO_DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

const initialiseToppings = () => toppings.forEach((topping) => (
  Topping.update(topping, topping, { upsert: true }, (err) => (
    err && console.error(err)
  ))
));

const initialiseSides = () => sides.forEach((side) => (
  Side.update(side, side, { upsert: true }, (err) => (
    err && console.error(err)
  ))
));

const initialiseDrinks = () => drinks.forEach((drink) => (
  Drink.update(drink, drink, { upsert: true }, (err) => (
    err && console.error(err)
  ))
));

const initialiseDatabase = () => {
  initialiseToppings();
  initialiseSides();
  initialiseDrinks();
};

export default initialiseDatabase;
