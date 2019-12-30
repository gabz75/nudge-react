import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

function FormError(props) {
  // props
  const { className, message } = props;

  const Div = styled.div`
    ${tw`
      border
      border-solid
      border-red-500
      text-red-500
      p-2
      text-sm
      rounded
      relative
      flex
      justify-between
      items-center
    `};
  `;

  return (
    <Div className={className} role="alert">
      <span css={tw`block`}>{message}</span>
    </Div>
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
