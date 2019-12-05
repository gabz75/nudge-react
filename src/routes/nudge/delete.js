import React from 'react';
import { Link } from 'react-router-dom';

import { PATH as DashboardPath } from '../dashboard';

export const PATH = '/nudge/delete/:id';
export const path = (id) => PATH.replace(':id', id);

function NudgeDelete() {
  return (
    <div>
      <Link to={DashboardPath}>back to Dashboard</Link>
    </div>
  );
}

NudgeDelete.path = PATH;

export default NudgeDelete;
