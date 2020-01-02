import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 1rem;
  color: ${(props) => props.theme.buttons.primary.color}
  background-color: ${(props) => props.theme.buttons.primary.backgroundColor}
  padding: 0.5rem 1rem;
  border: 2px solid ${(props) => props.theme.buttons.primary.borderColor}
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.4s ease 0s;
  letter-spacing: 0.5px;

  &:focus {
    outline: none;
  }

  &:hover  {
    background-color: ${(props) => props.theme.buttons.primary.backgroundColorActive}
  }
`;

export default {};
