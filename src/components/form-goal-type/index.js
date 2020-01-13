import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/input';
import { Box, Text } from 'components/globals';

function FormGoalTypeInt({ goalType, goalTypeState }) {
  // handlers
  const [unit, setUnit] = goalTypeState.unit;
  const onUnitChange = (e) => {
    setUnit(e.target.value);
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
  goalTypeState: PropTypes.shape({
    unit: PropTypes.array,
  }).isRequired,
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

function FormGoalType({ goalType, goalTypeState }) {
  const mapping = {
    GoalTypeBool: FormGoalTypeBool,
    GoalTypeInt: FormGoalTypeInt,
  };

  return mapping[goalType.type]({ goalType, goalTypeState });
}

FormGoalType.propTypes = {
  goalType: PropTypes.shape({
    description: PropTypes.string,
  }).isRequired,
};

export default FormGoalType;
