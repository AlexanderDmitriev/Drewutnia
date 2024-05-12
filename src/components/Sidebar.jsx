import styled from '@emotion/styled';
import { SidebarContainer,SearchInput } from './shared';
import { SidebarList } from './SidebarList';

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
      <SidebarList />
      <SearchInput />
    </SidebarContainer>
  );
};
