import { NavigationList, NavigationItem } from './NavigationSection.styled';

const Navigation = () => {

  return (
    <NavigationList>
      <NavigationItem>Strona Główna </NavigationItem>
      <NavigationItem>Nasze Speciały </NavigationItem> {/* EVENTS */}
      <NavigationItem>Aktualności </NavigationItem> {/* GAMES */}
      <NavigationItem>Rezerwacje </NavigationItem> {/* FEEDBACKS */}
      <NavigationItem>Galeria </NavigationItem> {/* GALLERY */}
      <NavigationItem>Kontakt </NavigationItem> {/* HOW TO FIND US */}
      <NavigationItem>Opinie</NavigationItem> {/*  MAKE ORDER */}
    </NavigationList>
  );
};

export default Navigation;
