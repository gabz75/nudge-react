/* Routes */

export const LoginPath = '/login';

export const SignupPath = '/signup';

export const GoalNewPath = '/goal/new';

export const GoalUpdatePath = '/goal/update/:id';

export const DashboardPath = '/dashboard';

/* Route helpers for dyanmic rotues */

export const goalUpdatePath = (id) => GoalUpdatePath.replace(':id', id);

export default {};
