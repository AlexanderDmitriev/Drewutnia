import { SidebarContainer,SearchInput } from '../../shared';
import { SidebarList } from '../../entities';
import {SidebarTitle,SidebarText} from './Sidebar.styled'


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
