import React from 'react';
import { string } from 'prop-types';

export default function VehicleInfo({ type, city, state, name }) {
  return (
    <div className="vehicle-info__container">
      <p className="vehicle-info__location">
        <b>
          {type} &#8226; {city}, {state}
        </b>
      </p>
      <p className="vehicle-info__name">
        <b>{name}</b>
      </p>
    </div>
  );
}

VehicleInfo.propTypes = {
  type: string.isRequired,
  city: string.isRequired,
  state: string.isRequired,
  name: string.isRequired,
};
