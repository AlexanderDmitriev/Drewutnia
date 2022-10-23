import Navigation from './Navigation/NavigationSection';
import Profile from './Profile';
import {LanguegeButton} from './Header.styled';

const Header = () => {
  return (
    <>
      <button type="button">Logo</button>
      <button type="button">Theme</button>
      <Navigation />
      <LanguegeButton/>
      <Profile />
    </>
  );
};

export default Header;
