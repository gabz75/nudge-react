import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';

import { DashboardPath, LoginPath } from '../../routes';
import Dropdown from '../dropdown';
import { useAuth } from '../../hooks/use-auth';

function Navbar() {
  // hooks
  const history = useHistory();
  const { isAuthenticated, logout } = useAuth();

  const Button = styled.button`
    :focus { outline: none; }
    border: none;
    background: none;
    cursor: pointer;
    ${tw`py-1`};
  `;

  // handlers
  const handleLogout = () => {
    logout();
    history.push(LoginPath);
  };

  if (!isAuthenticated()) {
    return <nav css={tw`bg-blue-100 w-full h-16 flex justify-center`} />;
  }

  return (
    <nav css={tw`bg-blue-100 w-full h-16 flex justify-center`}>
      <div css={tw`w-2/3 xl:w-1/4 flex items-center justify-end`}>
        <Dropdown>
          <Dropdown.Toggle>
            <div css={tw`bg-green-500 h-8 w-8 rounded-full`} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Link css={tw`py-1`} to={DashboardPath}>Dashboard</Link>
            <Button onClick={handleLogout}>Logout</Button>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}

export default Navbar;
