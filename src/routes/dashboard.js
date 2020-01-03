import React from 'react';

import Dashboard from 'components/dashboard';
import { Flex } from 'components/globals';

export const PATH = '/dashboard';

function DashboardRoute() {
  return (
    <Flex justifyContent="center">
      <Dashboard width={[1, 1 / 2, 1 / 3, 1 / 4]} />
    </Flex>
  );
}

DashboardRoute.path = PATH;

export default DashboardRoute;
