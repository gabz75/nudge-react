import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import { Container, Label, InputField } from './input.styles';

function Input(props) {
  // props
  const {
    value, className, label, type, onChange,
  } = props;

  // hooks
  const [id] = useState(() => uniqueId('input-'));

  return (
    <Container className={className}>
      <Label htmlFor={id}>
        {label}
        :
      </Label>
      <InputField id={id} type={type} value={value} onChange={onChange} />
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
