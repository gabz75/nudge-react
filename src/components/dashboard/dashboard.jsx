import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../button';
import AuthenticationContext from '../../contexts/authentication';

function Dashboard() {
  const authentication = useContext(AuthenticationContext);
  const history = useHistory();

  const logout = () => {
    authentication.clearJWT();
    history.push('/login');
  }

  return (
    <div className="border border-gray-400 bg-white p-4 rounded h-64 w-64">
      <p>JWT: {authentication.jwt}</p>
      <Button label="Log out" onClick={logout}/>
    </div>
  );
}

export default Dashboard;
