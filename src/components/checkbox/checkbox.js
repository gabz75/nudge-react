/** @jsx jsx */
import { styled } from '@emotion/styled';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';
import tw from 'tailwind.macro';

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
      'relative',
    ])
    .register('input', [
      'absolute',
      'h-0',
      'w-0',
      'cursor-pointer',
      'opacity-0',
    ])
    .register('checkmark', [
      'absolute',
      'w-4',
      'h-4',
      'bg-gray-500',
      'hover:bg-blue-500',
      'checked:bg-red-500',
    ]);

  const Label = tw.label`
    mr-4 relative
  `;

  console.log(Label);

  const [id] = useState(() => uniqueId('input-'));

  return (
    <div className={ch.get('container', className)}>
      <Label htmlFor={id}>
        {label}
        :
        <input id={id} className={ch.get('input')} type="checkbox" checked={checked} onChange={onChange} />
        <span className={ch.get('checkmark')} />
      </Label>
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
