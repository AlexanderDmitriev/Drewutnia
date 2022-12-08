import Navigation from './Navigation/NavigationSection';
import Profile from './Profile';
import ThemeButton from './ThemeButton';
import {
  AdditionalNavigation,
  LanguegeButton,
  Logo,
  UserMenu,
} from './Header.styled';
import logo from '../../images/logo.jpg';
import back from '../../images/back.jpg';
import styled from 'styled-components';
import Burger from './Navigation/Burger/Burger';
import Menu from './Navigation/Menu/Menu';
import React, { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useOnClickOutside } from './Navigation/Burger/hooks';

const Container = styled.div`
  margin: 0 auto;
  background-image: url(${back});
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  
    
`;

const Header = () => {
  /* const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' }); */
  const isTab = useMediaQuery({ query: '(min-width: 768px)' });
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setIsOpen(false));

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
          <ThemeButton />
          <LanguegeButton />
        </UserMenu>
      </AdditionalNavigation>
      {isTab ? (
        <Navigation />
      ) : (
        <div ref={node}>
          <Burger open={isOpen} setOpen={setIsOpen} />
          <Menu open={isOpen} setOpen={setIsOpen} />
        </div>
      )}
    </Container>
  );
};

export default Header;
