import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';

import Dashboard from '../components/dashboard';

export const PATH = '/dashboard';

function DashboardRoute() {
  return (
    <div css={tw`mt-8 flex justify-center items-center`}>
      <Dashboard css={tw`w-2/3 xl:w-1/4`} />
    </div>
  );
}

DashboardRoute.path = PATH;

export default DashboardRoute;
