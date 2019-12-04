import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

function Input(props) {
  const {
    value, className, label, type, onChange,
  } = props;
  const inputClassName = [
    'focus:outline-none',
    'focus:border-gray-500',
    'border',
    'border-gray-300',
    'rounded-lg',
    'p-2',
    'inline-block',
    'w-full',
    'appearance-none',
    'leading-normal',
  ].join(' ');
  const labelClassName = [
    'bg-white',
    'py-2',
    'inline-block',
    'w-full',
    'appearance-none',
    'leading-normal',
  ].join(' ');
  const [currentValue] = useState(value);
  const [id] = useState(() => uniqueId('input-'));

  return (
    <div className={className}>
      <label htmlFor={id} className={labelClassName}>
        {label}
        :
      </label>
      <input id={id} type={type} value={currentValue} onChange={onChange} className={inputClassName} />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: null,
  className: null,
  onChange: () => {},
};

export default Input;
