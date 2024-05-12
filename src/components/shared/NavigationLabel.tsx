import styled from '@emotion/styled';
import { NavLink, useMatch } from 'react-router-dom';

const NavLabel = styled(NavLink)`
  font-family: 'Abril Fatface', cursive;
  text-transform: uppercase;
  font-size: 38px;
  letter-spacing: 0.03em;
  color: #f0e7e7;
  cursor: pointer;
  text-decoration: none;
  padding: 6px 12px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 968px) {
    font-size: 20px;
  }
  transition-property: color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: linear;
  :hover,
  :focus {
    color: #ff8400;
    box-shadow: 1px 1px 5px var(--company-color);
  }
  /* &.active {
    color: #ff8400;
  } */
`;

export const NavigationLabel = ({ children, to, ...props }: any) => {
  const match = useMatch(to);
  return (
    <NavLabel
      to={to}
      style={{ color: match ? '#ff8400' : '#f0e7e7' }}
      {...props}
    >
      {children}
    </NavLabel>
  );
};
