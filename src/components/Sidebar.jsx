import styled from '@emotion/styled';
import sidebarBackground from '../images/beer2.jpg';
import sidebarBorder from '../images/wood.webp';
import { SearchInput } from './SearchInput';
import {SidebarList} from './SidebarList';

const SidebarContainer = styled.aside`
  width: 30%;
  height: 100vh;
  background-image: url(${sidebarBackground});
  background-color: #f0e7e7;
  background-size: contain;
  background-repeat: no-repeat;
  border-image: url(${sidebarBorder}) 27 / 0 0 0 15px / 0 30px 0 4px;
  overflow: auto;
  float: right;
  padding: 0 40px;
  right: 0;
  top: 129px;
  position: fixed;
`;

const SidebarTitle = styled.h2`
  font-family: 'Abril Fatface', cursive;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 0.03em;
  color: #f0e7e7;
  margin: 0;
  padding: 5px;
`;

const SidebarText = styled.p`
  text-align: left;
  color: #f0e7e7;
  font-size: 14px;
  font-weight: 600;
  padding: 0 5px;
  cursor: pointer;
  transition: 0.25s linear;
  :hover {
    transform: scale(1.05);
  }
`;

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Aktualnośći</SidebarTitle>
      <SidebarText>
        Obserwuj nasz profil na Facebooku lun w Instagramie, aby być zawsze na
        bieżąco.
      </SidebarText>
      <SidebarTitle>Historię</SidebarTitle>
      <SidebarList/>
      <SearchInput />
    </SidebarContainer>
  );
};
