import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/input';
import { Box, Text } from 'components/globals';

function FormGoalTypeInt({ goalType, updateGoalType }) {
  // hooks
  const [unit, setUnit] = useState();

  // handlers
  const onUnitChange = (e) => {
    setUnit(e.target.value);
    updateGoalType({
      ...goalType,
      variables: {
        unit,
      },
    });
  };

  return (
    <div>
      <Box
        role="alert"
        padding="sm"
        mb="md"
        border="1px solid"
        borderColor="yellow"
      >
        <Text mb="0" color="yellow">{goalType.description}</Text>
      </Box>
      <Input type="text" label="Unit" placeholder="Miles" value={unit} onChange={onUnitChange} />
    </div>
  );
}

FormGoalTypeInt.propTypes = {
  goalType: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
  updateGoalType: PropTypes.func.isRequired,
};

function FormGoalTypeBool({ goalType }) {
  return (
    <Box
      role="alert"
      padding="sm"
      mb="md"
      color="yellow"
      border="1px solid"
      borderColor="yellow"
    >
      <Text mb="0">{goalType.description}</Text>
    </Box>
  );
}

FormGoalTypeBool.propTypes = {
  goalType: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
};

function FormGoalType({ goalType, updateGoalType }) {
  const mapping = {
    GoalTypeBool: FormGoalTypeBool,
    GoalTypeInt: FormGoalTypeInt,
  };

  return mapping[goalType.type]({ goalType, updateGoalType });
}

FormGoalType.propTypes = {
  goalType: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
  updateGoalType: PropTypes.func.isRequired,
};

export default FormGoalType;
