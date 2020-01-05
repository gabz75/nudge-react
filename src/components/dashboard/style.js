import styled from 'styled-components';

import { FlexCol, FlexRow } from 'components/globals';

export const Card = FlexCol;

Card.Header = styled(FlexRow)`
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.lightBlue};
  padding: 1rem;
  color: white;
`;

Card.Body = styled.div`
  position: relative;
  padding: 1rem;
  border-left: 1px solid ${(props) => props.theme.colors.border};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  border-right: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin: 0;
  color: white;
`;

export default {};
