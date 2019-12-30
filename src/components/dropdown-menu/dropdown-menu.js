import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

import DropdownContext from '../../contexts/dropdown';

const Div = styled.div`
  ${tw`
    bg-white
    border
    absolute
    right-0
    bottom-16
    mt-1
    leading-normal
    flex
    flex-col
    items-end
    py-2
    px-4
  `};
  ${(props) => !props.show && 'display: none'};
`;

function DropdownMenu({ children, ...props }) {
  // props
  const { className } = props;

  // hooks
  const dropdownContext = useContext(DropdownContext);

  return (
    <Div show={dropdownContext.showDropdown} drclassName={className}>
      {children}
    </Div>
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
