import React from 'react';
import { useHistory } from 'react-router-dom';
import 'styled-components/macro';
import tw from 'tailwind.macro';

import FormGoal from '../../components/form-goal';
import { PATH as DashboardPath } from '../dashboard';
import { useNudgeApi } from '../../hooks/use-nudge-api';

export const PATH = '/goal/new';

function NewGoal() {
  const { createGoal } = useNudgeApi();
  const history = useHistory();

  const handleSubmit = (variables) => createGoal({ variables }).then(() => history.push(DashboardPath));

  return (
    <div css={tw`mt-32 flex justify-center items-center`}>
      <FormGoal css={tw`w-1/4`} onSubmit={handleSubmit} />
    </div>
  );
}

NewGoal.path = PATH;

export default NewGoal;
