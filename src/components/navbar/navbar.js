import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { PATH as DashboardPath } from '../../routes/dashboard';
import { PATH as LoginPath } from '../../routes/login';
import Dropdown from '../dropdown';
import { useAuth } from '../../hooks/use-auth';

function Navbar() {
  // hooks
  const history = useHistory();
  const { isAuthenticated, logout } = useAuth();

  // handlers
  const handleLogout = () => {
    logout();
    history.push(LoginPath);
  };

  if (!isAuthenticated()) {
    return <nav className="bg-blue-1 w-full h-16 flex justify-center" />;
  }

  return (
    <nav className="bg-blue-1 w-full h-16 flex justify-center">
      <div className="w-2/3 xl:w-1/4 flex items-center justify-end">
        <Dropdown>
          <Dropdown.Toggle>
            <div className="bg-green-500 h-8 w-8 rounded-full" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Link className="py-1" to={DashboardPath}>Dashboard</Link>
            <button className="py-1" onClick={handleLogout}>Logout</button>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}

export default Navbar;
