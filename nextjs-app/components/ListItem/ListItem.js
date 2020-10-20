import React from 'react';
import { string, number } from 'prop-types';
import { Image } from '../common';
import { VehicleInfo } from '../VehicleInfo';
import { Score } from '../Score';
import useCurrency from '../../hooks/useCurrency';

export default function ListItem({ type, city, state, name, price, score, votes, image }) {
  const [currency] = useCurrency(price, 'USD');
  return (
    <div className="listitem__container">
      <Image alt={name} height="100%" width="4rem" lazy url={image} />
      <VehicleInfo type={type} city={city} state={state} name={name} />
      <Score currency={currency} score={score} votes={votes} />
    </div>
  );
}

ListItem.propTypes = {
  type: string.isRequired,
  city: string.isRequired,
  state: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  score: number.isRequired,
  votes: number.isRequired,
  image: string.isRequired,
};
