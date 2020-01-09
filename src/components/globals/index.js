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
  ${space}
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

export const ResponsiveCenteredLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;

  & > div {
    width: 100%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    // border: 1px solid blue;

    & > div {
      width: 85%;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    // border: 1px solid red;

    & > div {
      width: 75%;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    // border: 1px solid green;

    & > div {
      width: 65%;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
    // border: 1px solid green;

    & > div {
      width: 45%;
    }
  }
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
  ${color}
  ${space}
  ${typography}
  ${flexbox}
`;

export const StyledForm = styled.form`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.backgroundColor};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Spinner = styled.div`
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 0.5rem solid rgba(0, 0, 0, 0.2);
  border-right: 0.5rem solid rgba(0, 0, 0, 0.2);
  border-bottom: 0.5rem solid rgba(0, 0, 0, 0.2);
  border-left: 0.5rem solid ${(props) => props.theme.colors.primary};
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;

  &:after {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
  }

  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;


export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin: 0;
  color: inherit;
  ${color}
  ${typography}
`;

export default {};
