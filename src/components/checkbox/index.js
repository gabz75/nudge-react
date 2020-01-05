import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import { Wrapper, StyledCheckbox, StyledLabel } from './style';

function Checkbox(props) {
  // props
  const {
    checked, label, onChange,
  } = props;

  // hooks
  const [id] = useState(() => uniqueId('input-'));

  return (
    <Wrapper>
      <StyledCheckbox id={id} type="checkbox" checked={checked} onChange={onChange} />
      <StyledLabel htmlFor={id}>
        {label}
      </StyledLabel>
    </Wrapper>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: undefined,
  onChange: () => {},
};

export default Checkbox;
