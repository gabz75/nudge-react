import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import QueryGetMoodReports from 'graphql/queries/get-mood-reports';

function useGetGoals(args) {
  return useQuery(gql(QueryGetMoodReports), args);
}

export default useGetGoals;
