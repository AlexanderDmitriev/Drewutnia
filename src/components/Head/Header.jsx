import Navigation from './Navigation/NavigationSection';
import {
  HeaderContainer,
  AdressContainer,
  ContactsSection,
  Adress,
  Phone,
} from './Header.styled';
import { Logo, Instagram, Facebook } from '../shared';
import Burger from './Navigation/Burger/Burger';
import Menu from './Navigation/Menu/Menu';
import { useState, useRef } from 'react';
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
    <header>
      <HeaderContainer>
        <AdressContainer>
          <div>
            <Logo />
            <ContactsSection>
              <Adress>ul. Władysława Łokietka 43 Kraków</Adress>
              <Phone>(+48) 603-956-037</Phone>
            </ContactsSection>

            <div>
              <Facebook />
              <Instagram />
            </div>
          </div>
        </AdressContainer>
        {/* <AdditionalNavigation>
         <UserMenu>
          <Profile />
          <ThemeButton
            isDarkTheme={isDarkTheme}
            handleChangeTheme={handleChangeTheme}
          />
          {isTab && <LanguegeButton />}
        </UserMenu> 
      </AdditionalNavigation> */}
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
    </header>
  );
};

export default Header;