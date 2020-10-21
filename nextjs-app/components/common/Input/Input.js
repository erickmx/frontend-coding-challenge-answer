import React from 'react';
import { string, func } from 'prop-types';

export default function Input({ label, value, type, onChange, id }) {
  return (
    <>
      <label className="searchbar__label" htmlFor={id}>
        {label}
      </label>
      <input className="searchbar__input" id={id} type={type} value={value} onChange={onChange} />
    </>
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
