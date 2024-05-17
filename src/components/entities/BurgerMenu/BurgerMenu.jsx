import { StyledMenu } from './BurgerMenu.styled';
import {Navigation} from '../NavigationSection';
import { bool } from 'prop-types';

export const BurgerMenu = ({ open,setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <Navigation/>
    </StyledMenu>
  );
};

BurgerMenu.propTypes = {
  open: bool.isRequired,
};

