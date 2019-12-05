import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import { useClassNameHelper } from '../../hooks/use-class-name-helper';

function Checkbox(props) {
  // props
  const {
    checked, className, label, onChange,
  } = props;

  // hooks
  const ch = useClassNameHelper()
    .register('container', [
      'py-2',
      'flex',
      'items-center',
    ])
    .register('label', [
      'mr-2',
    ]);

  const [id] = useState(() => uniqueId('input-'));

  return (
    <div className={ch.get('container', className)}>
      <label htmlFor={id} className={ch.get('label')}>
        {label}
        :
      </label>
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
    </div>
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
