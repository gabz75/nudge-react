import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import DropdownContext from '../../contexts/dropdown';
import { useClassNameHelper } from '../../hooks/use-class-name-helper';

function DropdownMenu({ children, ...props }) {
  // props
  const { className } = props;
  // hooks
  const dropdownContext = useContext(DropdownContext);
  const ch = useClassNameHelper()
    .register('container', [
      'bg-white',
      'border',
      'absolute',
      'right-0',
      'bottom-16',
      'mt-1',
      'leading-normal',
      'flex',
      'flex-col',
      'items-end',
      'py-2',
      'px-4',
      dropdownContext.showDropdown ? '' : ' hidden',
    ]);

  return (
    <div className={ch.get('container', className)}>
      {children}
    </div>
  );
}

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

DropdownMenu.defaultProps = {
  className: undefined,
};

export default DropdownMenu;
