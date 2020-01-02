import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './style';

function Button(props) {
  // props
  const {
    children, className, type, onClick, label,
  } = props;

  return (
    <StyledButton
      data-testid="button"
      type={type}
      onClick={onClick}
      className={className}
    >
      {children || label}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  label: undefined,
  onClick: () => {},
  type: 'button',
};

export default Button;
