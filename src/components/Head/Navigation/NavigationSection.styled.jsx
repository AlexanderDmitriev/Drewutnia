import styled from 'styled-components';

export const NavigationList = styled.ul`
  padding-bottom: 13px;
  padding-left: 22px;
  padding-right: 20px;
  list-style: none;
  margin: 0;
  display: block;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
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

export const NavigationItem = styled.li`
  font-family: 'Abril Fatface', cursive;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 0.03em;
  color: #fff;
  cursor: pointer;
  padding: 6px 22px;
  @media screen and (min-width: 768px) {
    
    
  }

  transition-property: color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: linear;

  &:hover,
  &:focus {
    color: red;
    box-shadow: 1px 1px 5px var(--company-color);
  }
`;
