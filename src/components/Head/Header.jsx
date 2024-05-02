import Navigation from './Navigation/NavigationSection';
/* import Profile from './ProfileSection/Profile';
import ThemeButton from './ThemeChange/ThemeButton'; */
import {
  AdditionalNavigation,
  Logo,
  /* UserMenu, */ HeaderContainer,
  AdressContainer,
  Adress,
  Facebook,
  Instagram,
} from './Header.styled';
/* import { LanguegeButton } from './LanguegeButton'; */
import logo from '../../images/logo.jpg';
import Burger from './Navigation/Burger/Burger';
import Menu from './Navigation/Menu/Menu';
import React, { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useOnClickOutside } from './Navigation/Burger/hooks';
import facebook from '../../images/facebook2.svg';
import instagram from '../../images/instagram2.svg';

const Header = () => {
  const isTab = useMediaQuery({ query: '(min-width: 768px)' });
  const [isOpen, setIsOpen] = useState(false);
  /* const [isDarkTheme, setIsDarkTheme] = useState(false); */

  const node = useRef();
  useOnClickOutside(node, () => setIsOpen(false));

  /*   const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  }; */

  return (
    <HeaderContainer>
      <AdressContainer>
        <div>
          <a href="logo">
            <span>
              <Logo src={logo} alt="Drewutnia" />
            </span>
          </a>
          <Adress>ul. Władysława Łokietka 43 Kraków</Adress>
          <div>
            <a
              href="https://www.facebook.com/Pub.Drewutnia"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>
                <Facebook src={facebook} alt="facebook" />
              </span>
            </a>
            <a
              href="https://www.instagram.com/explore/locations/747190841/pub-drewutnia/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>
                <Instagram src={instagram} alt="instagram" />
              </span>
            </a>
          </div>
        </div>
      </AdressContainer>
      <AdditionalNavigation>
        {/* <UserMenu>
          <Profile />
          <ThemeButton
            isDarkTheme={isDarkTheme}
            handleChangeTheme={handleChangeTheme}
          />
          {isTab && <LanguegeButton />}
        </UserMenu> */}
      </AdditionalNavigation>
      {isTab ? (
        <Navigation />
      ) : (
        <>
          {/* <LanguegeButton /> */}
          <div ref={node}>
            <Burger open={isOpen} setOpen={setIsOpen} />
            <Menu open={isOpen} setOpen={setIsOpen} />
          </div>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
