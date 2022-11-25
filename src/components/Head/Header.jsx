import Navigation from './Navigation/NavigationSection';
import Profile from './Profile';
import ThemeButton from './ThemeButton';
import { AdditionalNavigation, LanguegeButton, Logo, UserMenu } from './Header.styled';
import logo from '../../images/logo.jpg';
import back from '../../images/back.jpg'
import styled from 'styled-components';

const Container = styled.div`
 margin: 0 auto;
 background-image: url(${back});
 padding: 15px;
`;

const Header = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Header;
