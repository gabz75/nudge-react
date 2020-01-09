import styled from 'styled-components';
import { space } from 'styled-system';

/* Radio Styles */

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
    border-radius: 50%;
  }
`;

export const StyledRadio = styled.input`
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
    border-radius: 50%;
  }

  // @todo :disabled + ${StyledLabel}
  // @todo :disabled + ${StyledLabel}:before
`;

/* Defaults for Button* Styles */

export const StyledLabelButtonDefault = styled.label`
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

/* Button Styles */

export const StyledLabelButton = styled(StyledLabelButtonDefault)`
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

export const StyledRadioButton = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:hover + ${StyledLabelButton} {
    background-color: ${(props) => props.theme.colors.text.gray};
    color: white;
  }

  &:checked + ${StyledLabelButton} {
    background-color: ${(props) => props.theme.colors.text.gray};
    color: white;
  }
`;

/* ButtonOutline Styles */

export const StyledLabelButtonOutline = styled(StyledLabelButtonDefault)`
  background: none;
  border: 1px solid ${(props) => props.theme.colors.text.gray};
  border-radius: 2px;
  transition: background-color 0.2s ease 0s;

  &:hover  {
    background-color: ${(props) => props.theme.colors.text.gray};
    color: white;
  }

  ${space}
`;

export const StyledRadioButtonOutline = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:hover + ${StyledLabelButtonOutline} {
    background-color: ${(props) => props.theme.colors.text.gray};
    color: white;
  }

  &:checked + ${StyledLabelButtonOutline} {
    background-color: ${(props) => props.theme.colors.text.gray};
    color: white;
  }
`;

export const Wrapper = styled.div``;

export default {};
