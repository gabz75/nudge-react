import React from 'react';

import Dashboard from '../components/dashboard';

export const PATH = '/dashboard';

function DashboardRoute() {
  return (
    <div className="mt-32 flex justify-center items-center">
      <Dashboard className="w-2/3" />
    </div>
  );
}

DashboardRoute.path = PATH;

export default DashboardRoute;
