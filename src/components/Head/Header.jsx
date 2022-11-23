import Navigation from './Navigation/NavigationSection';
import Profile from './Profile';
import ThemeButton from './ThemeButton';
import { AdditionalNavigation, LanguegeButton, Logo, UserMenu } from './Header.styled';
import logo from '../../images/logo.jpg';

const Header = () => {
  return (
    <>
      <AdditionalNavigation>
          <a href="logo">
            <span>
              <Logo src={logo} alt="Drewutnia" />
            </span>
          </a>
          <UserMenu>
          <Profile />
          <ThemeButton/>
          <LanguegeButton />
        </UserMenu>
      </AdditionalNavigation>
      <Navigation />
    </>
  );
};

export default Header;
