import React from 'react';

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
  )
};

export default FormError;
