import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';

import { arrayEmpty } from '../../util';
import { getToppings } from '../../../../api';
import { OrderContext } from '../../Context/OrderStore';
import Basket from '../../Basket/Basket';
import MaxToppingsModal from '../../../Modals/MaxToppings/MaxToppingsModal';

import './SelectPizzaToppings.sass';

const SelectPizzaToppings = () => {
  const { size } = useParams();
  const [availableToppings, setAvailableToppings] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [, dispatch] = useContext(OrderContext);

  useEffect(() => {
    getToppings()
      .then((res) => (
        res.status === 200
          && setAvailableToppings(res.data.map((topping) => topping.name))
      ));
  }, []);

  const pizzaPriceLookup = {
    small: 8.99, medium: 10.99, large: 12.99,
  };

  const submitPizza = () => {
    dispatch({
      type: 'ADD_PIZZA',
      payload: {
        toppings,
        size,
        price: toppings.length * 0.35 + pizzaPriceLookup[size],
      },
    });
    setSubmitted(true);
  };

  const toggleToppingSelected = (topping) => (toppings.includes(topping)
    ? setToppings(toppings.filter((t) => t !== topping))
    : setToppings([...toppings, topping]));

  const viewTopping = (topping) => (
    <>
      {!arrayEmpty(toppings) && toppings.includes(topping)
        && (
        <button
          key={topping}
          id={topping}
          onClick={() => toggleToppingSelected(topping)}
          className="Selected"
          type="submit"
        >
          {topping}
        </button>
        )}

      {(arrayEmpty(toppings) || !toppings.includes(topping)) && toppings.length < 6
        && (
        <button
          key={topping}
          id={topping}
          onClick={() => toggleToppingSelected(topping)}
          className="Available"
          type="submit"
        >
          {topping}
        </button>
        )}

      {!toppings.includes(topping) && toppings.length >= 6
        && (
        <a
          key={topping}
          id={topping}
          href="#MaxToppingsModal"
          data-toggle="modal"
          type="button"
        >
          {topping}
        </a>
        )}
    </>
  );

  if (submitted) { return <Redirect to="/order" />; }

  return (
    <>
      <MaxToppingsModal />
      <section id="PizzaTopping">
        <div id="PageContainer" className="container-fluid">
          <div id="PageRow" className="row">

            <Basket />

            <div id="ExceptBasket" className="col-xl-8 offset-xl-1">
              <article className="PageHead col-xl-12">
                <Link to="/order/pizza" className="BackButton">BACK</Link>
                <h2 className="Header">SELECT PIZZA TOPPINGS</h2>
              </article>

              <div className="col-xl-12 px-0">
                <article id="Toppings" className="row">
                  {!arrayEmpty(availableToppings) && availableToppings.map((t) => (
                    <div key={t} className="col-md-3 col-6">
                      {viewTopping(t)}
                    </div>
                  ))}
                </article>
              </div>

              <div className="col-12 d-flex justify-content-center">
                <button
                  onClick={submitPizza}
                  className="Done"
                  type="submit"
                >
                  DONE
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectPizzaToppings;
