import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import QueryGetNudges from '../../graphql/queries/get-nudges';

function useGetNudges(args) {
  return useQuery(gql(QueryGetNudges), args);
}

export default useGetNudges;
