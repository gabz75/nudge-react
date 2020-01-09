import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import {
  StyledLabel,
  StyledLabelButton,
  StyledLabelButtonOutline,
  StyledRadio,
  StyledRadioButton,
  StyledRadioButtonOutline,
  Wrapper,
} from './style';

export function BuildRadio(props, RadioComponent, LabelComponent) {
  // props
  const {
    className, currentValue, label, onChange, value,
  } = props;
  const checked = currentValue === value;

  // hooks
  const [id] = useState(() => uniqueId('input-'));

  return (
    <Wrapper className={className}>
      <RadioComponent id={id} type="radio" value={value} checked={checked} onChange={onChange} />
      <LabelComponent htmlFor={id}>
        {label}
      </LabelComponent>
    </Wrapper>
  );
}

BuildRadio.propTypes = {
  className: PropTypes.string,
  currentValue: PropTypes.node,
  value: PropTypes.node,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

BuildRadio.defaultProps = {
  className: undefined,
  value: null,
  currentValue: null,
  onChange: () => {},
};

export const RadioButtonOutline = (props) => BuildRadio(props, StyledRadioButtonOutline, StyledLabelButtonOutline);

export const RadioButton = (props) => BuildRadio(props, StyledRadioButton, StyledLabelButton);

export const Radio = (props) => BuildRadio(props, StyledRadio, StyledLabel);

export default Radio;
