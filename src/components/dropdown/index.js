import React from 'react';
import PropTypes from 'prop-types';

import DropdownToggle from 'components/dropdown-toggle';
import DropdownMenu from 'components/dropdown-menu';
import DropdownContext from 'contexts/dropdown';
import { useDropdown } from 'hooks/use-dropdown';
import { Wrapper } from './style';

function Dropdown({ children }) {
  // hooks
  const dropdownContext = useDropdown();

  return (
    <DropdownContext.Provider value={dropdownContext}>
      <Wrapper>
        { children }
      </Wrapper>
    </DropdownContext.Provider>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;

export default Dropdown;
