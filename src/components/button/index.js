import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledButton,
  StyledButtonLink,
  StyledButtonOutline,
} from './style';

function buildButton(props, Component) {
  // props
  const {
    children, type, onClick, label, ...rest
  } = props;

  return (
    <Component
      data-testid="button"
      type={type}
      onClick={onClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children || label}
    </Component>
  );
}

buildButton.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

buildButton.defaultProps = {
  children: undefined,
  label: undefined,
  onClick: () => {},
  type: 'button',
};

export const ButtonOutline = (props) => buildButton(props, StyledButtonOutline);

export const ButtonLink = (props) => buildButton(props, StyledButtonLink);

export const Button = (props) => buildButton(props, StyledButton);

export default Button;
