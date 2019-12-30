import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import FormGoal from '../../components/form-goal';
import { PATH as DashboardPath } from '../dashboard';
import { useNudgeApi } from '../../hooks/use-nudge-api';

export const PATH = '/goal/update/:id';
export const pathFor = (id) => PATH.replace(':id', id);

function GoalUpdate(props) {
  // props
  const { match: { params } } = props;

  // hooks
  const { getGoal, updateGoal } = useNudgeApi();
  const history = useHistory();

  const { loading, error, data } = getGoal({ variables: { id: params.id } });


  // handlers
  const handleSubmit = (args) => updateGoal(args).then(() => history.push(DashboardPath));

  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (
    <div className="mt-8 flex flex-col justify-center items-center">
      <FormGoal className="w-1/4" goal={data.getGoal} onSubmit={handleSubmit} />
      <Link to={DashboardPath}>back to Dashboard</Link>
    </div>
  );
}

GoalUpdate.path = PATH;

GoalUpdate.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default GoalUpdate;
