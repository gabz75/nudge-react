import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  space,
  typography,
} from 'styled-system';

export const Wrapper = styled.div`
  ${layout}
`;

export const Flex = styled(Wrapper)`
  display: flex;
  ${flexbox}
`;

export const FlexRow = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  ${flexbox}
`;

export const FlexCol = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  ${flexbox}
`;

export const Box = styled('div')(
  compose(
    space,
    background,
    border,
    color,
  ),
);

export const Link = styled(RouterLink)`
  color: ${(props) => props.theme.buttons.primary.backgroundColor}
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  ${space}
  ${typography}
`;

export const StyledForm = styled.form`
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.backgroundColor};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export default {};
