import React from 'react';
import PropTypes from 'prop-types';

import { useClassNameHelper } from '../../hooks/use-class-name-helper';

const CLASS_NAMES_SIZE_MAPPING = {
  sm: [
    'py-1',
    'px-2',
    'text-xs',
    'font-bold',
  ],

  md: [
    'py-2',
    'px-4',
    'text-sm',
    'font-bold',
  ],
};

function Button(props) {
  // props
  const {
    className, type, size, onClick, label,
  } = props;

  // hooks
  const ch = useClassNameHelper()
    .register('btn', [
      'bg-blue-500',
      'hover:bg-blue-400',
      'text-white',
      'border-b-4',
      'border-blue-700',
      'hover:border-blue-500',
      'rounded',
    ], CLASS_NAMES_SIZE_MAPPING[size]);

  return (
    <button type={type} onClick={onClick} className={ch.get('btn', className)}>
      {label}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['sm', 'md']),
};

Button.defaultProps = {
  className: undefined,
  label: undefined,
  onClick: () => {},
  type: 'button',
  size: 'md',
};

export default Button;
