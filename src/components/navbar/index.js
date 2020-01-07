import React from 'react';
import { useHistory } from 'react-router-dom';

import { DashboardPath, LoginPath } from 'routes';
import Dropdown from 'components/dropdown';
import { useAuth } from 'hooks/use-auth';
import { Title } from 'components/globals';
import { StyledNavbar, ProfileToggle } from './style';

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
    return (
      <StyledNavbar>
        <Title color="white">Nudge</Title>
      </StyledNavbar>
    );
  }

  return (
    <StyledNavbar>
      <Title color="white">Nudge</Title>
      <Dropdown>
        <Dropdown.Toggle>
          <ProfileToggle />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Link to={DashboardPath}>Dashboard</Dropdown.Link>
          <Dropdown.ButtonOutline mt="sm" onClick={handleLogout}>Logout</Dropdown.ButtonOutline>
        </Dropdown.Menu>
      </Dropdown>
    </StyledNavbar>
  );
}

export default Navbar;
