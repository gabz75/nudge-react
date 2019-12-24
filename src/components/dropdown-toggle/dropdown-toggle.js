import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import DropdownContext from '../../contexts/dropdown';
import { useClassNameHelper } from '../../hooks/use-class-name-helper';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';

function DropdownToggle({ children, ...props }) {
  // props
  const { className } = props;

  // hooks
  const ref = useRef();
  const dropdownContext = useContext(DropdownContext);
  const ch = useClassNameHelper()
    .register('button', [
      'focus:outline-none',
    ]);

  useOnClickOutside(ref, () => {
    setTimeout(() => dropdownContext.closeDropdown()); // @todo why setTimeout?
  });

  return (
    <button ref={ref} className={ch.get('button', className)} onClick={() => dropdownContext.toggleDropdown()}>
      {children}
    </button>
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
