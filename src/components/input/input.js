import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import { useClassNameHelper } from '../../hooks/use-class-name-helper';

function Input(props) {
  // props
  const {
    value, className, label, type, onChange,
  } = props;

  // hooks
  const ch = useClassNameHelper()
    .register('label', [
      'py-2',
      'inline-block',
      'w-full',
      'appearance-none',
      'leading-normal',
    ])
    .register('input', [
      'focus:outline-none',
      'focus:border-indigo-500',
      'border',
      'border-gray-300',
      'p-2',
      'inline-block',
      'w-full',
      'appearance-none',
      'leading-normal',
    ]);

  const [id] = useState(() => uniqueId('input-'));

  return (
    <div className={className}>
      <label htmlFor={id} className={ch.get('label')}>
        {label} :
      </label>
      <input id={id} type={type} value={value} onChange={onChange} className={ch.get('input')} />
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
  value: '', // @todo: why undefined creates an uncontrolled/controlled component switch?
  className: undefined,
  onChange: () => {},
};

export default Input;
