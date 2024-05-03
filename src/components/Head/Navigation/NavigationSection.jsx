import { NavigationList, NavigationItem } from './NavigationSection.styled';

const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <li>
          <NavigationItem to="/">Strona Główna</NavigationItem>
        </li>
        <li>
          <NavigationItem>Nasze Speciały</NavigationItem>
        </li>
        <li>
          <NavigationItem>Aktualności</NavigationItem>
        </li>
        <li>
          <NavigationItem>Rezerwacje</NavigationItem>
        </li>
        <li>
          <NavigationItem>Galeria</NavigationItem>
        </li>
        <li>
          <NavigationItem>Kontakt</NavigationItem>
        </li>
        <li>
          <NavigationItem>Opinie</NavigationItem>
        </li>
      </NavigationList>
    </nav>
  );
};

export default Navigation;
