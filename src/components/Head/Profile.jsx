import { NavigationItem } from '../Head/Navigation/NavigationSection.styled';
import styled from 'styled-components';

const UserMenuItem = styled(NavigationItem)`
  font-size: 14px;
  color: #fff;
`;

const UserMenuList = styled.ul`
  display: flex;
  list-style: none;
`;

const Profile = () => {
  return (
    <>
      <UserMenuList>
        <UserMenuItem> Załóż konto</UserMenuItem> {/* SIGN IN */}
        <UserMenuItem>Zalogować się </UserMenuItem> {/* LOG IN */}
        {/* <UserMenuItem>Wyloguj</UserMenuItem> */} {/* LOG OUT */}
      </UserMenuList>
    </>
  );
};
export default Profile;
