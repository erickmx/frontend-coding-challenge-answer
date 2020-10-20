import React from 'react';
import Link from 'next/link';
import { shape, arrayOf, string, number } from 'prop-types';

import { ListItem } from '../ListItem';

export default function ListVehicles({ vehicles }) {
  return (
    <div className="list-vehicle__container">
      {vehicles.map(vehicle => (
        <Link key={`vehicle_${vehicle.id}`} href={`/detail/${vehicle.id}`}>
          <a href="/">
            <ListItem
              id={vehicle.id}
              city={vehicle.attributes.location.city}
              state={vehicle.attributes.location.state}
              type={vehicle.attributes.display_vehicle_type}
              name={vehicle.attributes.vehicle_model}
              price={vehicle.attributes.price_per_day}
              score={vehicle.attributes.rental_score}
              votes={vehicle.attributes.reviews_num}
              image={vehicle.attributes.primary_image_url}
            />
          </a>
        </Link>
      ))}
    </div>
  );
}

ListVehicles.propTypes = {
  vehicles: arrayOf(
    shape({
      id: number.isRequired,
      attributes: shape({
        location: shape({
          city: string,
          state: string,
        }),
        type: string,
        name: string,
        price: number,
        score: number,
        votes: number,
        image: string,
      }),
    }),
  ),
};

ListVehicles.defaultProps = {
  vehicles: [],
};
