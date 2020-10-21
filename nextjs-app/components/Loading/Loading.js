import React from 'react';
import { string } from 'prop-types';

export default function Loading({ className }) {
  return <div className={`loader ${className}`}>Loading...</div>;
}

Loading.propTypes = {
  className: string,
};

Loading.defaultProps = {
  className: '',
};
