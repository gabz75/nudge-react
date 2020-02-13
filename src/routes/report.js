import React from 'react';

import Report from 'components/report';
import { ResponsiveCenteredLayout } from 'components/globals';

function DashboardRoute() {
  return (
    <ResponsiveCenteredLayout>
      <Report />
    </ResponsiveCenteredLayout>
  );
}

export default DashboardRoute;
