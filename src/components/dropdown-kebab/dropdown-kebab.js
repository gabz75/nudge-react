import React from 'react';
import PropTypes from 'prop-types';
import Octicon, { KebabVertical } from '@primer/octicons-react';

import Dropdown from 'components/dropdown';

function DropdownKebab({ children }) {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <Octicon icon={KebabVertical} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {children}
      </Dropdown.Menu>
    </Dropdown>
  );
}

DropdownKebab.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DropdownKebab;
