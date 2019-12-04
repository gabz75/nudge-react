import React from 'react';

function Button(props) {
  const defaultClassName = [
    'bg-blue-500',
    'hover:bg-blue-400',
    'text-white',
    'font-bold',
    'py-2',
    'px-4',
    'border-b-4',
    'border-blue-700',
    'hover:border-blue-500',
    'rounded',
  ];

  const className = defaultClassName.concat(props.className).join(' ');

  return (
    <button onClick={props.onClick} className={className}>
      {props.label}
    </button>
  );
}

export default Button;
