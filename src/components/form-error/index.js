import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from 'components/globals';

function FormError(props) {
  // props
  const { message, className } = props;

  return (
    <Box
      className={className}
      role="alert"
      padding="sm"
      color="red"
      border="1px solid"
      borderColor="red"
    >
      <Text marginBottom="0" fontSize="sm">{message}</Text>
    </Box>
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
