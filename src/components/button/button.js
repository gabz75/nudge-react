import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const defaultClassName = [
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
  ];

  const className = defaultClassName.concat(props.className).join(' ');

  return (
    <button type={props.type} onClick={props.onClick} className={className}>
      {props.label}
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
