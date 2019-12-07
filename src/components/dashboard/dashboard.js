import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Octicon, { KebabVertical } from '@primer/octicons-react';

import Nudge from '../nudge';
import Button from '../button';
import { PATH as LoginPath } from '../../routes/login';
import { PATH as NudgeNewPath } from '../../routes/nudge/new';
import { useAuth } from '../../hooks/use-auth';
import { useNudgeApi } from '../../hooks/use-nudge-api';

function Dashboard(props) {
  // props
  const { className } = props;

  // hooks
  const { logout } = useAuth();
  const history = useHistory();
  const { getNudges, deleteNudge } = useNudgeApi();
  const {
    loading, error, data, refetch, networkStatus,
  } = getNudges({ notifyOnNetworkStatusChange: true, fetchPolicy: 'cache-and-network' });

  // handlers
  const logoutAndRedirect = () => {
    logout();
    history.push(LoginPath);
  };
  const handleDelete = async (nudge) => {
    await deleteNudge({ variables: { id: nudge.id } });
    refetch();
  };

  if (networkStatus === 4) return 'Refetching!';
  if (loading) return 'Loading...';
  if (error) return <Button label="Log out" onClick={logoutAndRedirect} />;

  return (
    <div className={className}>
      <div className="bg-yellow-1 px-8 py-4 flex justify-between items-center text-white">
        <h2 className="text-xl">Your goals</h2>
        <Link to={NudgeNewPath}><Octicon icon={KebabVertical} /></Link>
      </div>
      <div className="border border-t-0 p-4">
        <div className="border">
          {
            data.getNudges.map((nudge, i) => (
              <Nudge className={i > 0 ? 'border-t' : ''} key={nudge.id} nudge={nudge} onDelete={handleDelete} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  className: PropTypes.string,
};

Dashboard.defaultProps = {
  className: undefined,
};

export default Dashboard;
