import React from 'react';

function Input(props, state) {
  const inputClassName = [
    'focus:outline-none',
    'focus:border-gray-500',
    'border',
    'border-gray-300',
    'rounded-lg',
    'p-2',
    'inline-block',
    'w-full',
    'appearance-none',
    'leading-normal',
 ].join(' ');

 const labelClassName = [
    'bg-white',
    'py-2',
    'inline-block',
    'w-full',
    'appearance-none',
    'leading-normal',
 ].join(' ');

  return (
    <div className={props.className}>
      <label className={labelClassName}>{props.label}:</label>
      <input type={props.type} value={props.value} onChange={props.onChange} className={inputClassName}/>
    </div>
  );
}

export default Input;
