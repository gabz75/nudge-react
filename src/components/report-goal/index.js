import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PropTypesGoalValue from 'prop-types/goal-value';
import Input from 'components/input';
import Checkbox from 'components/checkbox';

/* eslint-disable react/prop-types */

function ReportGoal({ goalValue, onChange }) {
  // hooks
  const typedValue = goalValue.value && (goalValue.value.boolValue || goalValue.value.intValue);
  const [value, setValue] = useState(typedValue);

  // handlers
  const handleOnChange = (v) => {
    setValue(v);
    onChange(goalValue.goal, v);
  };

  return (
    <>
      {
        goalValue.goal.goalTypeImpl.goalType.type === 'GoalTypeInt' && (
          <Input
            type="number"
            label={goalValue.goal.name}
            placeholder={goalValue.goal.goalTypeImpl.unit}
            value={value}
            onChange={(e) => handleOnChange(e.target.value)}
          />
        )
      }
      {
        goalValue.goal.goalTypeImpl.goalType.type === 'GoalTypeBool' && (
          <Checkbox
            label={goalValue.goal.name}
            checked={value}
            onChange={(e) => handleOnChange(e.target.checked)}
          />
        )
      }
    </>
  );
}

ReportGoal.propTypes = {
  goalValue: PropTypesGoalValue.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ReportGoal;
