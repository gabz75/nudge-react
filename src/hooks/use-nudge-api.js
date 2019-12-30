import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import MutationCreateGoal from '../graphql/mutations/create-goal';
import MutationCreateUser from '../graphql/mutations/create-user';
import MutationDeleteGoal from '../graphql/mutations/delete-goal';
import MutationLogin from '../graphql/mutations/login';
import MutationUpdateGoal from '../graphql/mutations/update-goal';

import getGoal from './queries/use-get-goal';
import getGoals from './queries/use-get-goals';
import getGoalTypes from './queries/use-get-goal-types';

export const useNudgeApi = () => {
  const [createGoalMutation] = useMutation(gql(MutationCreateGoal));
  const [createUserMutation] = useMutation(gql(MutationCreateUser));
  const [deleteGoalMutation] = useMutation(gql(MutationDeleteGoal));
  const [loginMutation] = useMutation(gql(MutationLogin));
  const [updateGoalMutation] = useMutation(gql(MutationUpdateGoal));

  const createGoal = (args) => createGoalMutation(args);
  const createUser = (args) => createUserMutation(args);
  const deleteGoal = (args) => deleteGoalMutation(args);
  const login = (args) => loginMutation(args);
  const updateGoal = (args) => updateGoalMutation(args);

  return {
    createGoal,
    createUser,
    deleteGoal,
    login,
    updateGoal,
    getGoal,
    getGoals,
    getGoalTypes,
  };
};

export default useNudgeApi;
