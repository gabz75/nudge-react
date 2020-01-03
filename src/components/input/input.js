import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import {
  Wrapper,
  StyledLabel,
  StyledInput,
} from './style';

function Input(props) {
  // props
  const {
    value, className, label, type, onChange,
  } = props;

  // hooks
  const [id] = useState(() => uniqueId('input-'));

  return (
    <Wrapper>
      <StyledLabel htmlFor={id}>
        {label}
        :
      </StyledLabel>
      <StyledInput id={id} type={type} value={value} onChange={onChange} />
    </Wrapper>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '', // @todo: why undefined creates an uncontrolled/controlled component switch?
  onChange: () => {},
};

export default Input;
