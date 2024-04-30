import Navigation from './Navigation/NavigationSection';
/* import Profile from './ProfileSection/Profile';
import ThemeButton from './ThemeChange/ThemeButton'; */
import { AdditionalNavigation, Logo, /* UserMenu, */ HeaderContainer } from './Header.styled';
/* import { LanguegeButton } from './LanguegeButton'; */
import logo from '../../images/logo.jpg';
import Burger from './Navigation/Burger/Burger';
import Menu from './Navigation/Menu/Menu';
import React, { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useOnClickOutside } from './Navigation/Burger/hooks';

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
      <AdditionalNavigation>
        <a href="logo">
          <span>
            <Logo src={logo} alt="Drewutnia" />
          </span>
        </a>
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
