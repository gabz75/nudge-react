import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

import DropdownToggle from '../dropdown-toggle';
import DropdownMenu from '../dropdown-menu';
import DropdownContext from '../../contexts/dropdown';
import { useDropdown } from '../../hooks/use-dropdown';

const Div = styled.div`
  ${tw`relative leading-zero`};
`;

function Dropdown({ children, ...props }) {
  // props
  const { className } = props;

  // hooks
  const dropdownContext = useDropdown();

  return (
    <DropdownContext.Provider value={dropdownContext}>
      <Div className={className}>
        { children }
      </Div>
    </DropdownContext.Provider>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Dropdown.defaultProps = {
  className: undefined,
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;

export default Dropdown;
