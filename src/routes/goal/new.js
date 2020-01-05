import React from 'react';
import { useHistory } from 'react-router-dom';

import FormGoal from 'components/form-goal';
import { FlexCol } from 'components/globals';
import { DashboardPath } from 'routes';
import { useNudgeApi } from 'hooks/use-nudge-api';

function NewGoal() {
  const { createGoal } = useNudgeApi();
  const history = useHistory();

  const handleSubmit = (args) => createGoal(args).then(() => history.push(DashboardPath));

  return (
    <FlexCol alignItems="center">
      <FormGoal width={[1, 1 / 2, 1 / 3, 1 / 4]} onSubmit={handleSubmit} />
    </FlexCol>
  );
}

export default NewGoal;
