import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import QueryGetMoodReport from 'graphql/queries/get-mood-report';

function useGetGoals(args) {
  return useQuery(gql(QueryGetMoodReport), args);
}

export default useGetGoals;
