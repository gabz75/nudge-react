import React from 'react';
import { useHistory } from 'react-router-dom';

import FormGoal from '../../components/form-goal';
import { PATH as DashboardPath } from '../dashboard';
import { useNudgeApi } from '../../hooks/use-nudge-api';

export const PATH = '/goal/new';

function NewGoal() {
  const { createGoal } = useNudgeApi();
  const history = useHistory();

  const handleSubmit = (variables) => createGoal({ variables }).then(() => history.push(DashboardPath));

  return (
    <div className="mt-8 flex justify-center items-center">
      <FormGoal className="w-1/3" onSubmit={handleSubmit} />
    </div>
  );
}

NewGoal.path = PATH;

export default NewGoal;
