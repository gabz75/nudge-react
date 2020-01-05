import React from 'react';
import { useHistory } from 'react-router-dom';

import FormGoal from 'components/form-goal';
import { ResponsiveCenteredLayout } from 'components/globals';
import { DashboardPath } from 'routes';
import { useNudgeApi } from 'hooks/use-nudge-api';

function NewGoal() {
  const { createGoal } = useNudgeApi();
  const history = useHistory();

  // handlers
  const handleSubmit = (args) => createGoal(args).then(() => history.push(DashboardPath));

  return (
    <ResponsiveCenteredLayout>
      <FormGoal onSubmit={handleSubmit} />
    </ResponsiveCenteredLayout>
  );
}

export default NewGoal;
