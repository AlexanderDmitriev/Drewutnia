import Navigation from './Navigation/NavigationSection';
import {
  HeaderContainer,
  AdressContainer,
  ContactsSection,
  Adress,
} from './Header.styled';
import { Logo, HeaderLabel } from '../shared';
import {Instagram} from '../Instagram';
import {Facebook} from '../Facebook';
import Burger from './Navigation/Burger/Burger';
import Menu from './Navigation/Menu/Menu';
import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useOnClickOutside } from './Navigation/Burger/hooks';
/* import { BurgerMenu } from '../Hamburger'; */

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
              <HeaderLabel>(+48) 603-956-037</HeaderLabel>
            </ContactsSection>
            {/* <BurgerMenu /> */}
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
