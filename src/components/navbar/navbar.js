import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { DashboardPath, LoginPath } from '../../routes';
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
        <div className="text-sm mr-2 block md:hidden lg:hidden xl:hidden">sm</div>
        <div className="text-sm mr-2 hidden md:block lg:hidden xl:hidden">md</div>
        <div className="text-sm mr-2 hidden md:hidden lg:block xl:hidden">lg</div>
        <div className="text-sm mr-2 hidden md:hidden lg:hidden xl:block">xl</div>
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
