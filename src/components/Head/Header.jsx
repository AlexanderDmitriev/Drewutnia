import Navigation from './Navigation/NavigationSection';
import Profile from './Profile';

const Header = () => {
  return (
    <>
      <button type="button">Logo</button>
      <button type="button">Theme</button>
      <button type="button">Languege</button>
      <Navigation />
      <Profile />
    </>
  );
};

export default Header;
