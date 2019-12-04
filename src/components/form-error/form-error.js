import React from 'react';
import PropTypes from 'prop-types';

function FormError(props) {
  const className = [
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
  ].join(' ').concat(' ').concat(props.className);

  return (
    <div className={className} role="alert">
      <span className="block">{props.message}</span>
    </div>
  );
}

FormError.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
};

FormError.defaultProps = {
  className: null,
  message: null,
};

export default FormError;
