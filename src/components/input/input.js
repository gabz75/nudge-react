import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

function Input(props) {
  // props
  const {
    value, className, label, type, onChange,
  } = props;

  // hooks
  const [id] = useState(() => uniqueId('input-'));

  const Container = styled.label`
    ${tw`flex flex-col`};
  `;
  const Label = styled.label`
    ${tw`py-2 inline-block w-full appearance-none leading-normal`};
  `;

  const inputCss = tw`
    focus:outline-none
    focus:border-indigo-500
    border
    border-solid
    border-gray-300
    py-2
    inline-block
    appearance-none
    leading-normal
  `;

  return (
    <Container className={className}>
      <Label htmlFor={id}>
        {label}
        :
      </Label>
      <input css={inputCss} id={id} type={type} value={value} onChange={onChange} />
    </Container>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '', // @todo: why undefined creates an uncontrolled/controlled component switch?
  className: undefined,
  onChange: () => {},
};

export default Input;
