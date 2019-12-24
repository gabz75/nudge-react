import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Octicon, { KebabVertical } from '@primer/octicons-react';

import Goal from '../goal';
import Button from '../button';
import Dropdown from '../dropdown';
import { LoginPath, GoalNewPath } from '../../routes';
import { useAuth } from '../../hooks/use-auth';
import { useNudgeApi } from '../../hooks/use-nudge-api';
import { useClassNameHelper } from '../../hooks/use-class-name-helper';

function Dashboard(props) {
  // props
  const { className } = props;

  // hooks
  const { logout } = useAuth();
  const history = useHistory();
  const { getGoals, deleteGoal } = useNudgeApi();
  const {
    loading, error, data, refetch, networkStatus,
  } = getGoals({ notifyOnNetworkStatusChange: true, fetchPolicy: 'cache-and-network' });
  const ch = useClassNameHelper()
    .register('container', [
      'bg-white',
    ]);

  // handlers
  const logoutAndRedirect = () => {
    logout();
    history.push(LoginPath);
  };
  const handleDelete = async (goal) => {
    await deleteGoal({ variables: { id: goal.id } });
    refetch();
  };

  if (networkStatus === 4) return 'Refetching!';
  if (loading) return 'Loading...';
  if (error) return <Button label="Log out" onClick={logoutAndRedirect} />;

  return (
    <div className={ch.get('container', className)}>
      <div className="bg-yellow-1 px-8 py-4 flex justify-between items-center text-white">
        <h2 className="text-xl">Your goals</h2>
        <Dropdown className="pl-32">
          <Dropdown.Toggle>
            <div className="w-8 h-8 flex items-center justify-center">
              <Octicon icon={KebabVertical} />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Link to={GoalNewPath} className="text-black">Add a goal</Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="border border-t-0 p-4">
        <div className="border">
          {
            data.getGoals.map((goal, i) => (
              <Goal className={i > 0 ? 'border-t' : ''} key={goal.id} goal={goal} onDelete={handleDelete} />
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
