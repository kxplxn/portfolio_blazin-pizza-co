import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { getSides } from '../../api';

import Basket from './Basket/Basket';
import { OrderContext } from './Context/OrderStore';
import { arrayEmpty } from './Basket/utils';

const ChooseSides = () => {
  const [availableSides, setAvailableSides] = useState([]);
  const [done, setDone] = useState(false);
  const [order, dispatch] = useContext(OrderContext);

  useEffect(() => {
    getSides()
      .then((serverSides) => {
        const clientSides = serverSides.map((s) => ({
          name: s.name,
          price: s.price,
          quantity: 1,
        }));
        setAvailableSides(clientSides);
      });
  }, []);

  const addSide = (side) => {
    console.log('ADD SIDE');
    return arrayEmpty(order.sides.filter((s) => s.name === side.name)) ? (
      dispatch({
        type: 'ADD_NEW_SIDE',
        payload: side,
      })
    ) : (
      dispatch({
        type: 'INCREASE_SIDE_QUANTITY',
        payload: side.name,
      })
    );
  };

  const submitSides = () => setDone(true);

  if (done) {
    return <Redirect to="/order" />;
  }

  return (
    <section id="AddSide">
      <div id="PageContainer" className="container-fluid">
        <div id="PageRow" className="row">

          <Basket />

          <div id="ExceptBasket" className="col-xl-8 offset-xl-1">

            <article className="PageHead col-xl-12">
              <h2 className="Header">ADD SIDES</h2>
            </article>

            <article id="Sides" className="col-xl-12">
              <div className="row">

                {!arrayEmpty(availableSides) && availableSides.map((side) => (
                  <div key={side.name} className="col-4">
                    <button type="button" onClick={() => addSide(side)}>
                      {side.name}
                    </button>
                  </div>
                ))}

              </div>
            </article>

            <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="Done" onClick={submitSides}>DONE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseSides;