import React from 'react';
import { string, bool } from 'prop-types';

export default function Image({ url, alt, lazy, width, height, className }) {
  return (
    <img
      className={`outdoorsy__image ${className}`}
      src={url}
      alt={alt}
      loading={lazy ? 'lazy' : 'eager'}
      width={width}
      height={height}
    />
  );
}

Image.propTypes = {
  height: string.isRequired,
  width: string.isRequired,
  url: string.isRequired,
  alt: string.isRequired,
  className: string,
  lazy: bool,
};

Image.defaultProps = {
  className: '',
  lazy: false,
};
