import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from 'components/globals';

function FormError(props) {
  // props
  const { message } = props;

  return (
    <Box
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
  message: PropTypes.string,
};

FormError.defaultProps = {
  message: undefined,
};

export default FormError;
