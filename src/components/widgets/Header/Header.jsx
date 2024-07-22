import { HeaderContainer, ContactsSection, Adress } from './Header.styled';
import { Logo, HeaderLabel, HeaderBlocks, Burger } from '../../shared';
import { BurgerMenu, Navigation, Instagram, Facebook } from '../../entities';
import { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useOnClickOutside } from '../../shared/Burger/hooks';
//import { LanguageToggle } from '../LanguegeToggle/LanguageToggle';

export const Header = ({ i18n }) => {
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
      <HeaderBlocks>
        <div>
          <Logo />
          <ContactsSection>
            <Adress>ul. Władysława Łokietka 43 Kraków</Adress>
            <HeaderLabel href="tel:+48603956037">(+48) 603-956-037</HeaderLabel>
          </ContactsSection>
          <div>
           {/*  <LanguageToggle i18n={i18n} /> */}
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
            <BurgerMenu open={isOpen} setOpen={setIsOpen} />
          </div>
        </>
      )}
    </HeaderContainer>
  );
};
