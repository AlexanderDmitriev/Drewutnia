import Hamburger from 'hamburger-react';
import Menu from './entities/BurgerMenu/BurgerMenu';
import { useState } from 'react';

export const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const onToggled = toggled => {
    if (toggled) {
      // open a menu
      console.log('open');
      setOpen(!isOpen);
    } else {
      // close a menu
      console.log('close');
      setOpen(!isOpen);
    }
  };

  return (
    <>
      <Hamburger
        color="#f0e7e7"
        toggled={isOpen}
        toggle={setOpen}
        onToggle={onToggled}
      />
      <Menu open={isOpen} />
    </>
  );
};
