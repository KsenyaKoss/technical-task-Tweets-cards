import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100vw;
  height: 100vw;
  background: var(--linearGradient);
  color: var(--btnBgc);
  text-align: center;
  padding: 200px  50px;
`;

export const StyledTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 50px;
`;

export const StyledLink = styled(NavLink)`
  color: var(--btnBgc);
  font-size: 30px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: white;
  }
`;
