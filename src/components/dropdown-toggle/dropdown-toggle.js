import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import DropdownContext from '../../contexts/dropdown';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';
import { Button } from './dropdown-toggle.styles';

function DropdownToggle({ children, ...props }) {
  // props
  const { className } = props;

  // hooks
  const ref = useRef();
  const dropdownContext = useContext(DropdownContext);

  useOnClickOutside(ref, () => {
    setTimeout(() => dropdownContext.closeDropdown()); // @todo why setTimeout?
  });

  return (
    <Button ref={ref} className={className} onClick={() => dropdownContext.toggleDropdown()}>
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
