import React from 'react';

function Input(props, state) {
  return (
    <div>
      <label>{props.label}:</label>
      <input type={props.type} value={props.value} onChange={props.onChange}/>
    </div>
  );
}

export default Input;
