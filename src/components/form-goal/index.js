import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from 'components/input';
import Checkbox from 'components/checkbox';
import FormGoalType from 'components/form-goal-type';
import { useIsMounted } from 'hooks/use-is-mounted';
import { useNudgeApi } from 'hooks/use-nudge-api';
import { FlexRow } from 'components/globals';
import {
  Wrapper,
  FlexCol,
  StyledButton,
  StyledForm,
  StyledFormError,
  StyledAbsoluteSpinner,
  StyledRadioButtonOutline,
} from './style';

function FormGoal(props) {
  // props
  const {
    onSubmit,
    goal,
  } = props;

  // hooks
  const isMounted = useIsMounted();
  const [name, setName] = useState(goal.name);
  const [color, setColor] = useState(goal.color);
  const [_public, setPublic] = useState(goal.public);
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const { getGoalTypes } = useNudgeApi();
  const { loadingGoalTypes, data } = getGoalTypes();
  const [selectedGoalType, setSelectedGoalType] = useState();

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    onSubmit({
      variables: {
        id: goal.id,
        name,
        color,
        public: _public,
        goalType: {
          type: selectedGoalType.type,
          variables: selectedGoalType.variables,
        },
      },
    })
      .catch((error) => setErrorMessage(error.message))
      .finally(() => isMounted.current && setLoading(false));
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Name"
          placeholder="Running"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          label="Color"
          placeholder="#dedede"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Checkbox label="Public" checked={_public} onChange={(e) => setPublic(e.target.checked)} />
        {
          data && (
            <FlexCol>
              <FlexRow justifyContent="flex-start" mb="md">
                {
                  data.getGoalTypes.map((goalType) => (
                    <StyledRadioButtonOutline
                      key={goalType.id}
                      value={goalType.id}
                      currentValue={selectedGoalType && selectedGoalType.id}
                      onChange={() => setSelectedGoalType(goalType)}
                      label={goalType.friendlyName}
                    />
                  ))
                }
              </FlexRow>
              { selectedGoalType && <FormGoalType goalType={selectedGoalType} updateGoalType={setSelectedGoalType} /> }
            </FlexCol>
          )
        }
        <StyledButton label="Submit" type="submit" />
        { (loading || loadingGoalTypes) && <StyledAbsoluteSpinner /> }
        { errorMessage && <StyledFormError message={errorMessage} /> }
      </StyledForm>
    </Wrapper>
  );
}

FormGoal.propTypes = {
  onSubmit: PropTypes.func,
  goal: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    public: PropTypes.bool,
  }),
};

FormGoal.defaultProps = {
  onSubmit: () => {},
  goal: {},
};

export default FormGoal;
