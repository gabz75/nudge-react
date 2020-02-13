/* Routes */

export const LoginPath = '/login';

export const SignupPath = '/signup';

export const GoalNewPath = '/goal/new';

export const GoalUpdatePath = '/goal/update/:id';

export const DashboardPath = '/dashboard';

export const ReportsPath = '/reports';

export const ReportNewPath = '/report/new';

export const ReportUpdatePath = '/reports/:id';

/* Route helpers for dyanmic rotues */

export const goalUpdatePath = (id) => GoalUpdatePath.replace(':id', id);

export const reportUpdatePath = (id) => ReportUpdatePath.replace(':id', id);

export default {};
