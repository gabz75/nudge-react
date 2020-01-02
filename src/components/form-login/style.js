import styled from 'styled-components';

import Button from 'components/button';
import { FlexCol } from 'components/globals';

export const Wrapper = styled(FlexCol)`

`;

export const StyledForm = styled.form`
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.backgroundColor};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  align-self: flex-end;
`;

export default {};
