import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: #5a6d81;
  height: 4rem;
  margin-bottom: ${(props) => props.theme.space.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const ProfileToggle = styled.div`
  width: 2rem;
  height: 2rem;
  background: #dedede;
  border-radius: 2px;
`;

export default {};
