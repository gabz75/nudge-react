import styled from 'styled-components';

export const StyledLabel = styled.label`
  position: relative;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;

  :before {
    content: '';
    margin-right: 0.5rem;
    display: inline-block;
    vertical-align: text-top;
    width: 2rem;
    height: 2rem;
    background: white;
    border: 1px solid ${(props) => props.theme.colors.border};
  }
`;

export const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;

  &:hover + ${StyledLabel}:before {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }

  // @todo: improve
  &:focus + ${StyledLabel}:before {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  }

  &:checked + ${StyledLabel}:after {
    content: '';
    position: absolute;
    left: 4px;
    top: 4px;
    bottom: 4px;
    width: calc(2rem - 4px - 2px); // width - padding - borders
    background: ${(props) => props.theme.colors.primary};
  }

  // @todo :disabled + ${StyledLabel}
  // @todo :disabled + ${StyledLabel}:before
`;

export const Wrapper = styled.div``;

export default {};
