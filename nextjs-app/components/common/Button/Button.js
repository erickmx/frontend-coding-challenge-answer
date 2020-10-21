import React from 'react';
import { func, string, oneOfType, element } from 'prop-types';

export default function Button({ type, text, onClick, className }) {
  return (
    <button className={`outdoorsy__button ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: oneOfType([string.isRequired, element.isRequired]).isRequired,
  type: string.isRequired,
  className: string,
  onClick: func,
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
};
