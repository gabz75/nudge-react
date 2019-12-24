import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import QueryGetGoals from '../../graphql/queries/get-goals';

function useGetNudges(args) {
  return useQuery(gql(QueryGetGoals), args);
}

export default useGetNudges;
