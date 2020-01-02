import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';

import Dashboard from '../components/dashboard';
import { RouteWrapper } from './routes.styles';

export const PATH = '/dashboard';

function DashboardRoute() {
  return (
    <RouteWrapper>
      <Dashboard css={tw`w-2/3 xl:w-1/4`} />
    </RouteWrapper>
  );
}

DashboardRoute.path = PATH;

export default DashboardRoute;
