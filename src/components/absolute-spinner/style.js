import styled from 'styled-components';

import { Spinner } from 'components/globals';

export const Background = styled.div`
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  right: 0.5rem;
  left: 0.5rem;
  background-color: rgba(75, 139, 242, 0.1);
  z-index: 999999;
`;

export const StyledSpinner = styled(Spinner)`
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
`;

export default {};
