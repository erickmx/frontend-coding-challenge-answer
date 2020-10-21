import React from 'react';
import { string, number, oneOfType } from 'prop-types';

export default function PriceCircle({ price }) {
  return <div className="price-circle__container">{price}</div>;
}

PriceCircle.propTypes = {
  price: oneOfType([string, number]).isRequired,
};
