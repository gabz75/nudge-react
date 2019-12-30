import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import {
  Container,
  Label,
  CustomCheckbox,
  CheckboxField,
} from './checkbox.styles';


function Checkbox(props) {
  // props
  const {
    checked, className, label, onChange,
  } = props;

  const [id] = useState(() => uniqueId('input-'));

  return (
    <Container className={className}>
      <Label htmlFor={id}>
        {label}
        :
        <CheckboxField id={id} type="checkbox" checked={checked} onChange={onChange} />
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
