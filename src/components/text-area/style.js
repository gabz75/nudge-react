import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin-bottom: 0.25rem;
  letter-spacing: 0.5px;
  font-size: ${(props) => props.theme.fontSizes.md}
`;

export const StyledTextarea = styled.textarea`
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border}

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.buttons.primary.backgroundColor}
  }
`;
