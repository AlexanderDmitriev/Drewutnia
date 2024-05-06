import { NavigationItem, NavigationList } from '../../shared';

const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <li>
          <NavigationItem to="/">Strona Główna</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/menu">Nasze Speciały</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/events">Aktualności</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/reserve">Rezerwacje</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/gallery">Galeria</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/contacts">Kontakt</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/">Opinie</NavigationItem>
        </li>
      </NavigationList>
    </nav>
  );
};

export default Navigation;
