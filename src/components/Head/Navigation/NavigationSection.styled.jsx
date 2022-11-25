import styled from 'styled-components';

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 13px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  padding-left: 22px;
  padding-right: 20px;
  list-style: none;
  margin: 0;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const NavigationItem = styled.li`
  font-family: 'Abril Fatface', cursive;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 0.03em;
  color: #fff;
  cursor: pointer;
  border-color: transparent;
  padding: 6px 22px;

  transition-property: color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: linear;

  &:hover,
  &:focus {
    color: red;
    box-shadow: 1px 1px 5px var(--company-color);
  }
`;
