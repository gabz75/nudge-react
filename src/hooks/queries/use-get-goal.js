import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import QueryGetGoal from 'graphql/queries/get-goal';

function useGetGoal(args) {
  return useQuery(gql(QueryGetGoal), args);
}

export default useGetGoal;
