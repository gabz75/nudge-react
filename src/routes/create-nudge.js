import React from 'react';
import { useHistory } from 'react-router-dom';

import FormNudge from '../components/form-nudge';
import { PATH as DashboardPath } from './dashboard';
import { useNudgeApi } from '../hooks/use-nudge-api';

function CreateNudgeRoute() {
  const { createNudge } = useNudgeApi();
  const history = useHistory();

  const handleSubmit = (variables) => createNudge(variables).then(() => history.push(DashboardPath));

  return (
    <div className="mt-32 flex justify-center items-center">
      <FormNudge className="w-1/4" onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateNudgeRoute;