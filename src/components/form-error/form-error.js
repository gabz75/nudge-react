import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from 'components/globals';

function FormError(props) {
  // props
  const { className, mt, message } = props;

  return (
    <Box
      role="alert"
      padding="sm"
      mt={mt}
      color="red"
      border="1px solid"
      borderColor="red"
      className={className}
    >
      <Text marginBottom="0" fontSize="sm">{message}</Text>
    </Box>
  );
}

FormError.propTypes = {
  className: PropTypes.string,
  mt: PropTypes.string,
  message: PropTypes.string,
};

FormError.defaultProps = {
  className: undefined,
  mt: undefined,
  message: undefined,
};

export default FormError;
