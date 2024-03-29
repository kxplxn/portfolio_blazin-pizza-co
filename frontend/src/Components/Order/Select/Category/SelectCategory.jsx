import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Basket from '../../Basket/Basket';
import { setNavLinkActive } from '../../util';

import './SelectCategory.sass';

const SelectCategory = () => {
  useEffect(() => {
    setNavLinkActive('Order');
  }, []);

  return (
    <section id="SelectCategory">
      <div id="PageContainer" className="container-fluid">
        <div id="PageRow" className="row">
          <Basket />
          <div id="ExceptBasket" className=" col-10 col-xl-8 offset-1">
            <article className="Options">
              <Link to="/order/pizza" className="Pizzas">
                PIZZAS
              </Link>
              <Link to="/order/sides" className="Sides">
                SIDES
              </Link>
              <Link to="/order/drinks" className="Drinks">
                DRINKS
              </Link>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SelectCategory;
