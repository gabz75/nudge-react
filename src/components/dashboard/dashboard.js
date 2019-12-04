import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../button';
import { useAuth } from '../../hooks/use-auth';

function Dashboard() {
  // hooks
  const { isAuthenticated, logout } = useAuth();
  const history = useHistory();

  // handlers
  const logoutAndRedirect = () => {
    logout();
    history.push('/login');
  };

  return (
    <div className="border border-gray-400 bg-white p-4 rounded h-64 w-64">
      <p>
        Authenticated:
        {isAuthenticated()}
      </p>
      <Button label="Log out" onClick={logoutAndRedirect} />
    </div>
  );
}

export default Dashboard;
