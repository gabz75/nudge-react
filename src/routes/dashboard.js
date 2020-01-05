import React from 'react';

import Dashboard from 'components/dashboard';
import { FlexCol } from 'components/globals';

function DashboardRoute() {
  return (
    <FlexCol alignItems="center">
      <Dashboard width={[1, 1 / 2, 1 / 3, 1 / 4]} />
    </FlexCol>
  );
}

export default DashboardRoute;
