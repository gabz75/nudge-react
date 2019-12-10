import React from 'react';
import PropTypes from 'prop-types';

import DropdownToggle from '../dropdown-toggle';
import DropdownMenu from '../dropdown-menu';
import DropdownContext from '../../contexts/dropdown';
import { useDropdown } from '../../hooks/use-dropdown';
import { useClassNameHelper } from '../../hooks/use-class-name-helper';

function Dropdown({ children, ...props }) {
  // props
  const { className } = props;

  // hooks
  const ch = useClassNameHelper()
    .register('container', [
      'relative',
      'leading-zero',
    ]);
  const dropdownContext = useDropdown();

  return (
    <DropdownContext.Provider value={dropdownContext}>
      <div className={ch.get('container', className)}>
        { children }
      </div>
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
