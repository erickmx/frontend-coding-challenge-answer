import React from 'react';
import { string } from 'prop-types';

export default function VehicleInfo({ type, city, state, name, className }) {
  return (
    <div className={`vehicle-info__container ${className}`}>
      <p className="vehicle-info__location">
        {type} &#8226; {city}, {state}
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
  className: string,
};

VehicleInfo.propTypes = {
  className: '',
};
