import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import Reducer from './OrderReducer';

const initialState = {
  memberId: '',
  pizzas: [],
  drinks: [],
  sides: [],
  paymentDetails: {
    cardNumber: '',
    expiryDate: '',
    securityCode: '',
  },
  address: {
    firstLine: '',
    secondLine: '',
    postcode: '',
  },
  phoneNumber: '',
  date: '',
};

const OrderStore = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <OrderContext.Provider value={[state, dispatch]}>
      {children}
    </OrderContext.Provider>
  );
};

OrderStore.propTypes = {
  children: PropTypes.element.isRequired,
};

export const OrderContext = createContext(initialState);

export default OrderStore;
