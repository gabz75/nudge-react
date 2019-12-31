import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import DropdownContext from '../../contexts/dropdown';
import { Button } from './dropdown-toggle.styles';

function DropdownToggle({ children, ...props }) {
  // props
  const { className } = props;

  // hooks
  const dropdownContext = useContext(DropdownContext);

  return (
    <Button className={className} onClick={() => dropdownContext.toggleDropdown()}>
      {children}
    </Button>
  );
}

DropdownToggle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

DropdownToggle.defaultProps = {
  className: undefined,
};

export default DropdownToggle;
