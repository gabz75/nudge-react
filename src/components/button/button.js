import React from 'react';
import PropTypes from 'prop-types';
import { ButtonTagFor } from './button.styles';

function Button(props) {
  // props
  const {
    children, className, type, size, onClick, label,
  } = props;

  const ButtonTag = ButtonTagFor(size);

  return (
    <ButtonTag
      size={size}
      data-testid="button"
      type={type}
      onClick={onClick}
      className={className}
    >
      {children || label}
    </ButtonTag>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['sm', 'md']),
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  label: undefined,
  onClick: () => {},
  type: 'button',
  size: 'md',
};

export default Button;
