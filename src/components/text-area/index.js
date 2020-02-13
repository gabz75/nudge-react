import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import {
  Wrapper,
  StyledLabel,
  StyledTextarea,
} from './style';

function Textarea(props) {
  // props
  const {
    value, label, onChange, ...rest
  } = props;

  // hooks
  const [id] = useState(() => uniqueId('input-'));

  return (
    <Wrapper>
      <StyledLabel htmlFor={id}>
        {label}
        :
      </StyledLabel>
      <StyledTextarea id={id} value={value} onChange={onChange} {...rest} />
    </Wrapper>
  );
}

Textarea.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  value: '',
  onChange: () => {},
};

export default Textarea;
