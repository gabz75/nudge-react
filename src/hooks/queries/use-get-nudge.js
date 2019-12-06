import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

import QueryGetNudge from '../../graphql/queries/get-nudge';

function useGetNudge(args) {
  return useQuery(gql(QueryGetNudge), args);
}

export default useGetNudge;
