import styled from 'styled-components';

import { FlexRow, Text } from 'components/globals';

export const GoalWrapper = styled(FlexRow)`
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-bottom: 0;

  &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }
`;

export const GoalColor = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 2px;
`;

export const GoalCell = styled(Text)`
  margin-bottom: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
`;

export const GoalCellGrow = styled(GoalCell)`
  flex-grow: 1;
`;

export const GoalCellDate = styled(GoalCell)`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.text.gray};
`;

export default {};
