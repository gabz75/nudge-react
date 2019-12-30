import React from 'react';

import Dashboard from '../components/dashboard';

export const PATH = '/dashboard';

function DashboardRoute() {
  return (
    <div className="mt-8 flex justify-center items-center">
      <Dashboard className="lg:w-2/3 xl:w-2/3" />
    </div>
  );
}

DashboardRoute.path = PATH;

export default DashboardRoute;
