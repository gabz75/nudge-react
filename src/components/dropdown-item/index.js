import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import DropdownContext from 'contexts/dropdown';
import {
  ButtonOutline,
  ButtonLink,
  Button,
} from 'components/button';
import { Link } from 'components/globals';

function BuildDropdownItem({ children, onClick, ...otherProps }, Component) {
  // hooks
  const dropdownContext = useContext(DropdownContext);

  // handlers
  const proxyOnClick = () => {
    dropdownContext.closeDropdown();
    if (onClick) onClick();
  };

  return <Component onClick={proxyOnClick} {...otherProps}>{children}</Component>;
}

BuildDropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

BuildDropdownItem.defaultProps = {
  onClick: undefined,
};

export const DropdownItemLink = (props) => BuildDropdownItem(props, Link);

export const DropdownItemButtonOutline = (props) => BuildDropdownItem(props, ButtonOutline);

export const DropdownItemButtonLink = (props) => BuildDropdownItem(props, ButtonLink);

export const DropdownItemButton = (props) => BuildDropdownItem(props, Button);

export default DropdownItemLink;
