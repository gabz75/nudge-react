import styled from 'styled-components';
import { space } from 'styled-system';

export { FlexRow } from 'components/globals';

export const StyledButton = styled.button`
  font-size: 1rem;
  background-color: none;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.text.gray}
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.2s ease 0s;
  letter-spacing: 0.5px;

  &:focus {
    outline: none;
  }

  &:hover  {
    background-color: ${(props) => props.theme.colors.text.gray}
    color: white;
  }

  ${space}
`;

export const Label = styled.span`
  padding-right: 0.5rem;
`;

export default {};
