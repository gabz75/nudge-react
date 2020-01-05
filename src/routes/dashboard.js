import React from 'react';

import Dashboard from 'components/dashboard';
import { ResponsiveCenteredLayout } from 'components/globals';

function DashboardRoute() {
  return (
    <ResponsiveCenteredLayout>
      <Dashboard />
    </ResponsiveCenteredLayout>
  );
}

export default DashboardRoute;
