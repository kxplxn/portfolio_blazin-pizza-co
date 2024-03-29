import React, { useContext } from 'react';
import { arrayEmpty, inchesLookup } from '../util';
import { OrderContext } from '../Context/OrderStore';

const BasketPizzas = () => {
  const [{ pizzas }] = useContext(OrderContext);
  return (
    <div className="Pizzas text-center">
      {pizzas.map((pizza) => (
        <div key={JSON.stringify(pizza)} className="Pizza col-xl-12">
          <h4>
            {inchesLookup(pizza.size)}
            {' '}
            Pizza - (£
            {pizza.price.toFixed(2)}
            )
          </h4>
          <p>
            {!arrayEmpty(pizza.toppings)
              ? pizza.toppings.map((topping) => {
                if (topping === pizza.toppings[pizza.toppings.length - 1]) {
                  return <span key={topping}>{topping}</span>;
                }
                return <span key={topping}>{`${topping}, `}</span>;
              }) : (
                <span>
                  No Toppings (Tomato Sauce and Cheese Only)
                </span>
              )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BasketPizzas;
