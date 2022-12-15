import styled from 'styled-components';
import { NavigationItem } from '../Navigation/NavigationSection.styled';

export const UserMenuItem = styled(NavigationItem)`
  font-size: 12px;
  color: #fff;
  @media screen and (min-width: 768px){font-size: 14px;}
`;

export const UserMenuList = styled.ul`
  display: block;
  list-style: none;
  @media screen and (min-width: 768px){display: flex;}
`;
