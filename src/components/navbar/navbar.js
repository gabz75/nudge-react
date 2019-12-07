import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import LoginPath from '../../routes/login';
import { useAuth } from '../../hooks/use-auth';

function Navbar() {
  // hooks
  const [showDropdown, setShowDropdown] = useState(false);
  const history = useHistory();
  const { isAuthenticated, logout } = useAuth();

  // handlers
  const handleMouseOver = () => setShowDropdown(!showDropdown);
  const handleLogout = () => {
    logout();
    history.push(LoginPath);
  };

  if (!isAuthenticated()) {
    return <nav className="bg-blue-1 w-full h-16 flex justify-center" />;
  }

  return (
    <nav className="bg-blue-1 w-full h-16 flex justify-center">
      <div className="w-2/3 flex items-center justify-end">
        <button className="bg-green-500 h-8 w-8 rounded-full" onClick={handleMouseOver}>&nbsp;</button>
        {
          showDropdown && (
            <div className="w-32 <bg-white-100></bg-white-100>">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )
        }
      </div>
    </nav>
  );
}

export default Navbar;
