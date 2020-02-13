import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import MutationCreateGoal from '../graphql/mutations/create-goal';
import MutationCreateUser from '../graphql/mutations/create-user';
import MutationDeleteGoal from '../graphql/mutations/delete-goal';
import MutationLogin from '../graphql/mutations/login';
import MutationUpdateGoal from '../graphql/mutations/update-goal';
import MutationCreateMoodReport from '../graphql/mutations/create-mood-report';
import MutationUpdateMoodReport from '../graphql/mutations/update-mood-report';

import useGetGoal from './queries/use-get-goal';
import useGetGoals from './queries/use-get-goals';
import useGetGoalTypes from './queries/use-get-goal-types';
import useGetMoodReport from './queries/use-get-mood-report';
import useGetMoodReports from './queries/use-get-mood-reports';

export const useNudgeApi = () => {
  const [createGoalMutation] = useMutation(gql(MutationCreateGoal));
  const [createUserMutation] = useMutation(gql(MutationCreateUser));
  const [deleteGoalMutation] = useMutation(gql(MutationDeleteGoal));
  const [loginMutation] = useMutation(gql(MutationLogin));
  const [updateGoalMutation] = useMutation(gql(MutationUpdateGoal));
  const [createMoodReportMutation] = useMutation(gql(MutationCreateMoodReport));
  const [updateMoodReportMutation] = useMutation(gql(MutationUpdateMoodReport));

  const createGoal = (args) => createGoalMutation(args);
  const createUser = (args) => createUserMutation(args);
  const deleteGoal = (args) => deleteGoalMutation(args);
  const login = (args) => loginMutation(args);
  const updateGoal = (args) => updateGoalMutation(args);
  const createMoodReport = (args) => createMoodReportMutation(args);
  const updateMoodReport = (args) => updateMoodReportMutation(args);

  return {
    createGoal,
    createUser,
    deleteGoal,
    login,
    updateGoal,
    createMoodReport,
    updateMoodReport,
    getGoal: useGetGoal,
    getGoals: useGetGoals,
    getGoalTypes: useGetGoalTypes,
    getMoodReports: useGetMoodReports,
    getMoodReport: useGetMoodReport,
  };
};

export default useNudgeApi;
