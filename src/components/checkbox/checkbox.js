import React, { useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import tw from 'tailwind.macro';

function Checkbox(props) {
  // props
  const {
    checked, className, label, onChange,
  } = props;

  const Container = styled.div`
    ${tw`py-2 flex items-center`};
  `;
  const Label = styled.label`
    ${tw`flex items-center relative cursor-pointer`};
    input:checked ~ span {
      background-color: blue;
    }

    &:hover input ~ span {
      ${tw`border-gray-900`};
    }

  `;
  const inputCss = tw`absolute opacity-0`;
  const CustomCheckbox = styled.span`
    ${tw`ml-2 w-6 h-6 border border-solid border-gray-400`};
  `;

  const [id] = useState(() => uniqueId('input-'));

  return (
    <Container className={className}>
      <Label htmlFor={id}>
        {label}
        :
        <input id={id} css={inputCss} type="checkbox" checked={checked} onChange={onChange} />
        <CustomCheckbox />
      </Label>
    </Container>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: undefined,
  className: undefined,
  onChange: () => {},
};

export default Checkbox;
