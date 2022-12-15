import { UserMenuItem, UserMenuList } from './UserLoginisation';

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
