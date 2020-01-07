import React from 'react';
import PropTypes from 'prop-types';
import Octicon, { KebabVertical } from '@primer/octicons-react';

import Dropdown from 'components/dropdown';
import {
  DropdownItemLink,
  DropdownItemButtonOutline,
  DropdownItemButtonLink,
  DropdownItemButton,
} from 'components/dropdown-item';

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

// Various DropdownItems to use within <DropdownKebab>
DropdownKebab.Link = DropdownItemLink;
DropdownKebab.ButtonOutline = DropdownItemButtonOutline;
DropdownKebab.ButtonLink = DropdownItemButtonLink;
DropdownKebab.Button = DropdownItemButton;

export default DropdownKebab;
