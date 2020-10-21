import React from 'react';
import { string, shape, arrayOf } from 'prop-types';

import { Image } from '../common';

export default function ImageDetail({ images }) {
  return (
    <div className="vehicle-info__list">
      {images.map(image => {
        return (
          <Image
            key={`detail_image_${image.id}`}
            url={image.attributes.url}
            width="100%"
            height="30vh"
            lazy
            alt={image.attributes.description}
            className="outdoorsy__image--no-border"
          />
        );
      })}
    </div>
  );
}

ImageDetail.propTypes = {
  images: arrayOf(
    shape({
      id: string.isRequired,
      attributes: shape({
        url: string.isRequired,
        description: string.isRequired,
      }).isRequired,
    }),
  ),
};

ImageDetail.defaultProps = {
  images: [],
};
