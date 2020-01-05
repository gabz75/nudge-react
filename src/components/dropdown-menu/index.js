import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import DropdownContext from 'contexts/dropdown';
import { useOnClickOutside } from 'hooks/use-on-click-outside';
import { Wrapper } from './style';

function DropdownMenu({ children }) {
  // hooks
  const ref = useRef();
  const dropdownContext = useContext(DropdownContext);

  useOnClickOutside(ref, () => dropdownContext.closeDropdown());
  // @todo: handle closing dropdown when action doens't destroy the menu.

  return (
    <Wrapper ref={ref} style={{ display: (dropdownContext.showDropdown ? 'flex' : ' none') }}>
      {children}
    </Wrapper>
  );
}

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DropdownMenu;
