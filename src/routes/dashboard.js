import React from 'react';

import Dashboard from 'components/dashboard';
import { FlexCol } from 'components/globals';

export const PATH = '/dashboard';

function DashboardRoute() {
  return (
    <FlexCol alignItems="center">
      <Dashboard width={[1, 1 / 2, 1 / 3, 1 / 4]} />
    </FlexCol>
  );
}

DashboardRoute.path = PATH;

export default DashboardRoute;
