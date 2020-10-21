import React from 'react';
import { number, string } from 'prop-types';
import StarsRating from 'react-rating-stars-component';

export default function Score({ currency, score, votes }) {
  return (
    <div className="score__container">
      {currency}
      <span className="score__votes">
        <StarsRating a11y count={5} half value={score * 5} size={18} edit={false} />({votes})
      </span>
    </div>
  );
}

Score.propTypes = {
  currency: string.isRequired,
  score: number.isRequired,
  votes: number.isRequired,
};
