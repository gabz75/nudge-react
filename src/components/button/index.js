import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledButton,
  StyledButtonLink,
  StyledButtonOutline,
} from './style';

function BuildButton(props, Component) {
  // props
  const {
    children, type, onClick, label, ...rest
  } = props;

  return (
    <Component
      data-testid="button"
      type={type}
      onClick={onClick}
      {...rest}
    >
      {children || label}
    </Component>
  );
}

BuildButton.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

BuildButton.defaultProps = {
  children: undefined,
  label: undefined,
  onClick: () => {},
  type: 'button',
};

export const ButtonOutline = (props) => BuildButton(props, StyledButtonOutline);

export const ButtonLink = (props) => BuildButton(props, StyledButtonLink);

export const Button = (props) => BuildButton(props, StyledButton);

export default Button;
