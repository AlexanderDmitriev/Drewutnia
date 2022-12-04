import { NavigationList, NavigationItem } from './NavigationSection.styled';

const Navigation = () => {

  return (
    <NavigationList>
      <NavigationItem>Menu </NavigationItem>
      <NavigationItem>Wydarzenia </NavigationItem> {/* EVENTS */}
      <NavigationItem>Rozrywky </NavigationItem> {/* GAMES */}
      <NavigationItem>Opinie </NavigationItem> {/* FEEDBACKS */}
      <NavigationItem>Galeria </NavigationItem> {/* GALLERY */}
      <NavigationItem>jak nas znaleźć </NavigationItem> {/* HOW TO FIND US */}
      <NavigationItem>Sprawdź</NavigationItem> {/*  MAKE ORDER */}
    </NavigationList>
  );
};

export default Navigation;
