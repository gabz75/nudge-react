import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import QueryGetGoalTypes from '../../graphql/queries/get-goal-types';

function useGetGoalTypes(args) {
  return useQuery(gql(QueryGetGoalTypes), args);
}

export default useGetGoalTypes;
