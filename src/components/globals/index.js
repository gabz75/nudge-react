import styled from 'styled-components';
import {
  layout,
  flexbox,
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

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  ${space}
  ${typography}
`;

export default {};
