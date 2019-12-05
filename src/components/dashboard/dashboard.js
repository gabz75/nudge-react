import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Nudge from '../nudge';
import Button from '../button';
import { PATH as LoginPath } from '../../routes/login';
import { PATH as NudgeNewPath } from '../../routes/nudge/new';
import { useAuth } from '../../hooks/use-auth';
import { useClassNameHelper } from '../../hooks/use-class-name-helper';
import { useNudgeApi } from '../../hooks/use-nudge-api';

function Dashboard(props) {
  // props
  const { className } = props;

  // hooks
  const { logout } = useAuth();
  const history = useHistory();
  const { getNudges } = useNudgeApi();
  const { loading, error, data } = getNudges();
  const ch = useClassNameHelper()
    .register('container', [
      'border',
      'border-gray-400',
      'bg-white',
      'p-4',
      'rounded',
    ]);

  // handlers
  const logoutAndRedirect = () => {
    logout();
    history.push(LoginPath);
  };

  if (loading) return 'Loading...';
  if (error) return <Button label="Log out" onClick={logoutAndRedirect} />;

  return (
    <div className={ch.get('container', className)}>
      {
        data.getNudges.map((nudge) => (
          <Nudge key={nudge.id} nudge={nudge} />
        ))
      }
      <hr className="my-2" />
      <div className="flex items-center justify-end">
        <Button label="Add a Nudge" onClick={() => history.push(NudgeNewPath)} />
      </div>
      <Button label="Log out" className="inline-block" onClick={logoutAndRedirect} />
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
