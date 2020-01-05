import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import DropdownContext from 'contexts/dropdown';
import { ButtonClear } from './style';

function DropdownToggle({ children }) {
  // hooks
  const dropdownContext = useContext(DropdownContext);

  return (
    <ButtonClear onClick={() => dropdownContext.toggleDropdown()}>
      {children}
    </ButtonClear>
  );
}

DropdownToggle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DropdownToggle;
