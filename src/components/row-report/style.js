import styled from 'styled-components';

import { FlexRow, Text } from 'components/globals';

export const Wrapper = styled(FlexRow)`
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-bottom: 0;

  &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }
`;

export const GoalCell = styled(Text)`
  margin-bottom: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
`;

export const MoodReportDate = styled(GoalCell)`
  flex-grow: 1
`;

export const MoodReportScore = styled(GoalCell)`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.text.gray};
`;
