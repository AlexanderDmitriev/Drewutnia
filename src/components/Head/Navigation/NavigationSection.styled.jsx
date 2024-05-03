import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  padding: 10px;
  list-style: none;
  margin: 0;
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  }
  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const NavigationItem = styled(NavLink)`
  font-family: 'Abril Fatface', cursive;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 0.03em;
  color: #f0e7e7;
  cursor: pointer;
  text-decoration: none;
  padding: 6px 22px;
  @media screen and (min-width: 768px) and (max-width: 968px) {
    font-size: 12px;
  }

  transition-property: color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: linear;

  &:hover,
  &:focus {
    color: #ff8400;
    box-shadow: 1px 1px 5px var(--company-color);
  }
`;
