import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';

import PropTypesGoal from 'prop-types/goal';
import PropTypesMoodReport from 'prop-types/mood-report';
import ReportGoal from 'components/report-goal';
import Textarea from 'components/text-area';
import Input from 'components/input';
import {
  Wrapper,
  FlexCol,
  StyledButton,
  StyledForm,
  StyledFormError,
  StyledAbsoluteSpinner,
} from './style';
import reducer, {
  getInitialState,
  updateGoalValue,
  updateFeelings,
  updateDoing,
  updateScore,
} from './reducer';

function FormReport({ moodReport, onSubmit }) {
  const [state, dispatch] = useReducer(reducer, getInitialState(moodReport));
  const { score, feelings, doing } = state;

  const [loading, setLoading] = useState();
  const [errorMessage, setErrorMessage] = useState();
  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
  };
  const handleOnGoalChange = (goal, value) => {
    dispatch(updateGoalValue(goal.id, goal.goalTypeImpl.goalType.type, value));
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="number"
          label="Score"
          placeholder="x/10"
          value={score}
          onChange={(e) => dispatch(updateScore(e.target.value))}
        />
        <Textarea
          label="How are you feeling? "
          placeholder="I feel ..."
          value={feelings}
          onChange={(e) => dispatch(updateFeelings(e.target.value))}
        />
        <Textarea
          label="What have you been up to? "
          placeholder="I did ..."
          value={doing}
          onChange={(e) => dispatch(updateDoing(e.target.value))}
        />
        <p>Goals:</p>
        {
          moodReport.goalValues.map((goalValue) => (
            <ReportGoal
              key={goalValue.goal.id}
              data-testid="goal"
              goalValue={goalValue}
              onChange={handleOnGoalChange}
            />
          ))
        }
        <StyledButton label="Submit" type="submit" />
        { loading && <StyledAbsoluteSpinner /> }
        { errorMessage && <StyledFormError message={errorMessage} /> }
      </StyledForm>
    </Wrapper>
  );
}

FormReport.propTypes = {
  moodReport: PropTypesMoodReport,
  onSubmit: PropTypes.func,
};

FormReport.defaultProps = {
  goals: undefined,
  moodReport: undefined,
  onSubmit: () => {},
};

export default FormReport;
