import React from 'react';
import { StyledMenu } from './Menu.styled';
import Navigation from '../NavigationSection';
import { bool } from 'prop-types';

const Menu = ({ open,setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <Navigation/>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
