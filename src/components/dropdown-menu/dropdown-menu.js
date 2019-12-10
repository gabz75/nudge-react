import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import DropdownContext from '../../contexts/dropdown';

const DEFAULT_CLASS_NAME = 'bg-white border absolute right-0 bottom-16 flex flex-col items-end py-2 px-4';

function DropdownMenu({ children }) {
  // hooks
  const dropdownContext = useContext(DropdownContext);

  return (
    <div className={DEFAULT_CLASS_NAME.concat(dropdownContext.showDropdown ? '' : ' hidden')}>
      {children}
    </div>
  );
}

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

DropdownMenu.defaultProps = {

};

export default DropdownMenu;
