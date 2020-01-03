import React from 'react';
import PropTypes from 'prop-types';
import Octicon from '@primer/octicons-react';

import { Label, StyledButton, FlexRow } from './style';

function ButtonIcon(props) {
  // props
  const {
    children, className, onClick, icon, label, ...otherProps
  } = props;

  function sanitizeSytledSystemProps(object) {
    const ALLOWED_KEYS = [
      'mx',
    ];

    return Object.keys(object).reduce((o, key) => {
      const sanitizedObject = o;

      if (ALLOWED_KEYS.includes(key)) {
        sanitizedObject[key] = object[key];
      }

      return sanitizedObject;
    }, {});
  }

  return (
    <StyledButton
      data-testid="button"
      type="button"
      onClick={onClick}
      className={className}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...sanitizeSytledSystemProps(otherProps)}
    >
      <FlexRow justifyContent="stretch">
        <Label>{children || label}</Label>
        <Octicon icon={icon} />
      </FlexRow>
    </StyledButton>
  );
}

ButtonIcon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.func,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  children: undefined,
  className: undefined,
  icon: undefined,
  label: undefined,
  onClick: () => {},
};

export default ButtonIcon;
