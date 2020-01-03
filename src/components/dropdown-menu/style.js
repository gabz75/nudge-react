import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 0.5rem;
  position: absolute;
  display: flex;
  flex-grow: 1;
  right: 0;
  z-index: 9999;
  white-space: nowrap;
`;

export default {};
