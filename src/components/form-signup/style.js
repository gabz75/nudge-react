import styled from 'styled-components';

import Button from 'components/button';
import FormError from 'components/form-error';
import FormSpinner from 'components/form-spinner';
import { Text } from 'components/globals';

export { StyledForm, FlexCol, Link } from 'components/globals';

export const StyledButton = styled(Button)`
  align-self: flex-end;
`;

export const StyledText = styled(Text)`
  margin-top: 1rem;
  margin-bottom: 0;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.sm}
`;

export const StyledFormError = styled(FormError)`
  margin-top: 1rem;
`;

export const StyledFormSpinner = styled(FormSpinner)``;

export default {};
