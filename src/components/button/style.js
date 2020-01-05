import styled from 'styled-components';
import { space } from 'styled-system';

export const StyledButtonDefault = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  letter-spacing: 0.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: 0.5rem;
  }

  // @todo : improve
  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled(StyledButtonDefault)`
  color: ${(props) => props.theme.buttons.primary.color}
  background-color: ${(props) => props.theme.buttons.primary.backgroundColor}
  border: 2px solid ${(props) => props.theme.buttons.primary.borderColor}
  border-radius: 2px;
  transition: all 0.2s ease 0s;

  &:hover  {
    background-color: ${(props) => props.theme.buttons.primary.backgroundColorActive}
  }

  ${space}
`;

export const StyledButtonOutline = styled(StyledButtonDefault)`
  background: none;
  border: 1px solid ${(props) => props.theme.colors.text.gray}
  border-radius: 2px;
  transition: background-color 0.2s ease 0s;

  &:hover  {
    background-color: ${(props) => props.theme.colors.text.gray}
    color: white;
  }

  ${space}
`;

export const StyledButtonLink = styled(StyledButtonDefault)`
  background: none;
  border: none;

  &:hover  {
    text-decoration: underline;
  }

  ${space}
`;

export default {};
