import React from 'react';
import { string, func } from 'prop-types';

export default function Input({ label, value, type, onChange, id }) {
  return (
    <div className="input__container">
      <label className="searchbar__label" htmlFor={id}>
        {label}
      </label>
      <input className="searchbar__input" id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}

Input.propTypes = {
  label: string.isRequired,
  type: string.isRequired,
  id: string.isRequired,
  onChange: func,
  value: string,
};

Input.defaultProps = {
  onChange: () => {},
  value: '',
};
