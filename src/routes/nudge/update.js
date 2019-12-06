import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

import FormNudge from '../../components/form-nudge';
import { PATH as DashboardPath } from '../dashboard';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useNudgeApi } from '../../hooks/use-nudge-api';

import UPDATE_NUDGE from '../../graphql/mutations/update-nudge';

export const PATH = '/nudge/update/:id';
export const pathFor = (id) => PATH.replace(':id', id);

function NudgeUpdate(props) {
  // props
  const { match: { params } } = props;

  // hooks
  const { getNudge, updateNudge } = useNudgeApi();
  const history = useHistory();

  const { loading, error, data } = getNudge({ id: params.id });

  const [mut] = useMutation(UPDATE_NUDGE, {

  });

  // handlers
  const handleSubmit = async (variables) => {
    await mut({ variables });
    history.push(DashboardPath);
  };

  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (
    <div className="mt-32 flex flex-col justify-center items-center">
      <FormNudge className="w-1/4" nudge={data.getNudge} onSubmit={handleSubmit} />
      <Link to={DashboardPath}>back to Dashboard</Link>
    </div>
  );
}

NudgeUpdate.path = PATH;

NudgeUpdate.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default NudgeUpdate;
