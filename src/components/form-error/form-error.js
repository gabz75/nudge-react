import React from 'react';
import PropTypes from 'prop-types';

import { useClassNameHelper } from '../../hooks/use-class-name-helper';

function FormError(props) {
  // props
  const { className, message } = props;

  // hooks
  const ch = useClassNameHelper()
    .register('root', [
      'border',
      'border-red-500',
      'text-red-500',
      'p-2',
      'text-sm',
      'rounded',
      'relative',
      'flex',
      'justify-between',
      'items-center',
    ]);

  return (
    <div className={ch.get('root', className)} role="alert">
      <span className="block">{message}</span>
    </div>
  );
}

FormError.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
};

FormError.defaultProps = {
  className: undefined,
  message: undefined,
};

export default FormError;
