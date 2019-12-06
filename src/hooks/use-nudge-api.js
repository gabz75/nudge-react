import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

import MutationCreateNudge from '../graphql/mutations/create-nudge';
import MutationCreateUser from '../graphql/mutations/create-user';
import MutationDeleteNudge from '../graphql/mutations/delete-nudge';
import MutationLogin from '../graphql/mutations/login';
import MutationUpdateNudge from '../graphql/mutations/update-nudge';

import useGetNudge from './queries/use-get-nudge';
import useGetNudges from './queries/use-get-nudges';

export const useNudgeApi = () => {
  const [createNudgeMutation] = useMutation(gql(MutationCreateNudge));
  const [createUserMutation] = useMutation(gql(MutationCreateUser));
  const [deleteNudgeMutation] = useMutation(gql(MutationDeleteNudge));
  const [loginMutation] = useMutation(gql(MutationLogin));
  const [updateNudgeMutation] = useMutation(gql(MutationUpdateNudge));

  const createNudge = (variables) => createNudgeMutation({ variables });
  const createUser = (variables) => createUserMutation({ variables });
  const deleteNudge = (variables) => deleteNudgeMutation({ variables });
  const login = (variables) => loginMutation({ variables });
  const updateNudge = (variables) => updateNudgeMutation({ variables });

  return {
    createNudge,
    createUser,
    deleteNudge,
    login,
    updateNudge,
    getNudge: useGetNudge,
    getNudges: useGetNudges,
  };
};

export default useNudgeApi;
