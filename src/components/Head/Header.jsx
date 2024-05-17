import Navigation from '../entities/NavigationSection';
import { HeaderContainer, ContactsSection, Adress } from './Header.styled';
import { Logo, HeaderLabel, HeaderBlocks, Burger } from '../shared';
import { Instagram } from '../Instagram';
import { Facebook } from '../Facebook';
import Menu from '../entities/BurgerMenu/BurgerMenu';
import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useOnClickOutside } from '../shared/Burger/hooks';

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
        <HeaderBlocks>
          <div>
            <Logo />
            <ContactsSection>
              <Adress>ul. Władysława Łokietka 43 Kraków</Adress>
              <HeaderLabel>(+48) 603-956-037</HeaderLabel>
            </ContactsSection>
            <div>
              <Facebook />
              <Instagram />
            </div>
          </div>
        </HeaderBlocks>
        {/* <div>
          <Profile />
          <ThemeButton
            isDarkTheme={isDarkTheme}
            handleChangeTheme={handleChangeTheme}
          />
          {isTab && <LanguegeButton />}
      </div> */}
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
