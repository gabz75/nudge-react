import styled from 'styled-components';

import { Button } from 'components/button';
import { RadioButtonOutline } from 'components/radio';
import FormError from 'components/form-error';
import FormSpinner from 'components/absolute-spinner';
import { Text, FlexCol } from 'components/globals';

export { StyledForm, FlexCol, Link } from 'components/globals';

export const Wrapper = styled(FlexCol)`
  max-width: 600px ;
`;

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

export const StyledAbsoluteSpinner = FormSpinner;

export const StyledRadioButtonOutline = styled(RadioButtonOutline)`
  margin-right: 0.5rem;

  &:last-child {
    margin-right: 0;
  }
`;


export default {};
