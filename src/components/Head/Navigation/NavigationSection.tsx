import { NavigationItem, NavigationList } from '../../shared';

const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <li>
          <NavigationItem to="/">Strona Główna</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/">Nasze Speciały</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/">Aktualności</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/">Rezerwacje</NavigationItem>
        </li>
        <li>
          <NavigationItem to="/">Galeria</NavigationItem>
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
