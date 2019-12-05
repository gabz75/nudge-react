import React from 'react';
import { Link } from 'react-router-dom';

import { PATH as DashboardPath } from '../dashboard';

export const PATH = '/nudge/update/:id';
export const path = (id) => PATH.replace(':id', id);

function NudgeUpdate() {
  return (
    <Link to={DashboardPath}>back to Dashboard</Link>
  );
}

NudgeUpdate.path = PATH;

export default NudgeUpdate;
