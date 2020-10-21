import React from 'react';

import api from '../../../utils/api';
import useCurrency from '../../../hooks/useCurrency';
import { ImageDetail, VehicleInfo, OwnerInfo, PriceCircle } from '../../../components';

export default function DetailVehicle({ detail, images, owner }) {
  const [price] = useCurrency(detail.attributes.price_per_day, 'USD');
  return (
    <div className="outdoorsy__body outdoorsy__body--no-margin">
      <ImageDetail images={images.slice(0, 2)} />
      <PriceCircle price={price} />
      <VehicleInfo
        type={detail.attributes.display_vehicle_type}
        city={detail.attributes.location.city}
        state={detail.attributes.location.state}
        name={detail.attributes.vehicle_model}
        className="vehicle-info__container--margin"
      />
      <OwnerInfo
        avatarURL={owner.attributes.avatar_url}
        ownerName={`${owner.attributes.first_name} ${owner.attributes.last_name}`}
      />
    </div>
  );
}

DetailVehicle.getInitialProps = async ({ query }) => {
  const { id } = query;

  const { data } = await api.get(`/${id}`);

  const {
    relationships: { images, owner },
  } = data.data;

  const { included } = data;

  const vehicleImages = included.filter(inc => {
    const image = images.data.find(image => image.id === inc.id);
    return image;
  });
  const ownerData = included.filter(inc => {
    return owner.data.id === inc.id;
  })[0];

  return {
    vehicleId: id,
    detail: data.data,
    images: vehicleImages,
    owner: ownerData,
  };
};
