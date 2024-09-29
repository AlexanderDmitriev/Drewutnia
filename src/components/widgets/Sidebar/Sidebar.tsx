import { SidebarContainer } from '../../shared';
import { SidebarList } from '../../entities';
import {SidebarTitle,SidebarText} from './Sidebar.styled'


const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Aktualnośći</SidebarTitle>
      <SidebarText to="/events">
        Obserwuj nasz profil na Facebooku lub w Instagramie, aby być zawsze na
        bieżąco.
      </SidebarText>
      <SidebarTitle>Zwykle w pubie</SidebarTitle>
      <SidebarList />
      {/* <SearchInput /> */}
    </SidebarContainer>
  );
};

export default Sidebar;