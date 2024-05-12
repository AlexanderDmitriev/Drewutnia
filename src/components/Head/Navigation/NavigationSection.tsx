import { NavigationLabel, NavigationList } from '../../shared';

const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <li>
          <NavigationLabel to="/" >Strona Główna</NavigationLabel>
        </li>
        <li>
          <NavigationLabel to="/menu">Nasze Speciały</NavigationLabel>
        </li>
        <li>
          <NavigationLabel to="/events">Aktualności</NavigationLabel>
        </li>
        <li>
          <NavigationLabel to="/reserve">Rezerwacje</NavigationLabel>
        </li>
        <li>
          <NavigationLabel to="/gallery">Galeria</NavigationLabel>
        </li>
        <li>
          <NavigationLabel to="/contacts">Kontakt</NavigationLabel>
        </li>
        <li>
          <NavigationLabel to="/feedback">Opinie</NavigationLabel>
        </li>
      </NavigationList>
    </nav>
  );
};

export default Navigation;
