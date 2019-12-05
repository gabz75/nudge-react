import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';

/**
 * Queries
 */
const GET_NUDGES = gql`
  {
    getNudges {
      id
      name
      color
      archived
      public
      createdAt
      updatedAt
    }
  }
`;

/**
 * Mutations
 */

const CREATE_NUDGE_MUTATION = gql`
  mutation createNudge($name: String!, $color: String!, $public: Boolean) {
    createNudge(name: $name, color: $color, public: $public) {
      id
      name
      color
      archived
      public
      createdAt
      updatedAt
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation login($email: String!, $password: String!, $name: String!) {
    createUser(email: $email, password: $password, name: $name) {
      id
      email
      name
      jwt
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      name
      jwt
    }
  }
`;

export const useNudgeApi = () => {
  const [createNudgeMutation] = useMutation(CREATE_NUDGE_MUTATION);
  const [createUserMutation] = useMutation(CREATE_USER_MUTATION);
  const [loginMutation] = useMutation(LOGIN_MUTATION);
  const getNudgesQuery = useQuery(GET_NUDGES);

  const createNudge = (variables) => createNudgeMutation({ variables });
  const createUser = (variables) => createUserMutation({ variables });
  const getNudges = () => getNudgesQuery;
  const login = (variables) => loginMutation({ variables });

  return {
    createNudge,
    createUser,
    getNudges,
    login,
  };
};

export default useNudgeApi;
