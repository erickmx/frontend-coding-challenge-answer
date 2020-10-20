import React from 'react';
import { string } from 'prop-types';

// import './Title.css';

export default function Title({ title }) {
  return <h1 className="outdoorsy__title">{title}</h1>;
}

Title.propTypes = {
  title: string.isRequired,
};
