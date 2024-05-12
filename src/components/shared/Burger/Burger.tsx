import { StyledBurger } from './Burger.styled';
import {IBurger} from '../../Interfaces/IBurger'

export const Burger = ({ open, setOpen }:IBurger) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} setOpen={setOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};



