import React from 'react';
import PropTypes from 'prop-types';

import { useClassNameHelper } from '../../hooks/use-class-name-helper';

function Button(props) {
  // props
  const {
    className, type, onClick, label,
  } = props;

  // hooks
  const ch = useClassNameHelper()
    .register('btn', [
      'bg-blue-500',
      'hover:bg-blue-400',
      'text-white',
      'font-bold',
      'py-2',
      'px-4',
      'border-b-4',
      'border-blue-700',
      'hover:border-blue-500',
      'rounded',
    ]);

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
};

Button.defaultProps = {
  type: 'button',
  className: null,
  label: null,
  onClick: () => {},
};

export default Button;
