import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import FormGoal from 'components/form-goal';
import FormSpinner from 'components/absolute-spinner';
import { ResponsiveCenteredLayout } from 'components/globals';
import { DashboardPath } from 'routes';
import { useNudgeApi } from 'hooks/use-nudge-api';

function GoalUpdate(props) {
  // props
  const { match: { params } } = props;

  // hooks
  const { getGoal, updateGoal } = useNudgeApi();
  const history = useHistory();

  const { loading, error, data } = getGoal({ variables: { id: params.id } });

  // handlers
  const handleSubmit = (args) => updateGoal(args).then(() => history.push(DashboardPath));

  if (loading) return <FormSpinner />;
  if (error) return 'Error!';

  return (
    <ResponsiveCenteredLayout>
      <FormGoal goal={data.getGoal} onSubmit={handleSubmit} />
    </ResponsiveCenteredLayout>
  );
}

GoalUpdate.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default GoalUpdate;
