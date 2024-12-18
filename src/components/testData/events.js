import { v4 as uuidv4 } from 'uuid';
import dance from '../../images/events/dance.jpg';
import grille from '../../images/events/grille.jpg';
import christmas from '../../images/events/christmas.jpg';
import valentinesDay from '../../images/events/14_lutego.jpg';
import womensDay from '../../images/events/8_march.jpg';
import saintPatrik from '../../images/events/saintPatrick.jpg';
import may from '../../images/events/may.jpg';
import halloween from '../../images/events/Halloween.jpg';
import beer from '../../images/events/beer.jpg';
import newYear from '../../images/events/newYear.jpg';

export const events = [
  {
    id: uuidv4(),
    image: `${grille}`,
    name: 'Grille',
    date: 'W każdy piątek i sobotę',
    about: 'Jeśli szukasz miejsca w Krakowie, gdzie można zrobić grilla, to dobrze trafiłeś. W każdy piątek i sobotę zapraszamy na pyszne kiełbaski przygotowywane na ognisku na waszych oczach. Idealnie pasują do piwa! Dodatkowo zawsze można tu spędzić wieczór w przyjemnym towarzystwie.',
  },
  {
    id: uuidv4(),
    image: `${dance}`,
    name: 'Tańcy',
    date: 'W każdą sobotę',
    about: 'U nas nie tylko możesz napić się zimnego piwa, ale także zatańczyć. Tańczymy w każdą sobotę przy najlepszych polskich i światowych hitach.',
  },
  {
    id: uuidv4(),
    image: `${christmas}`,
    name: 'Wigilia',
    date: '24 grudnia',
    about: 'Zdrowych, wesołych i rodzinnych świąt!',
  },
  {
    id: uuidv4(),
    image: `${newYear}`,
    name: 'Silwester',
    date: '31 grudnia',
    about: 'Drodzy Nasi Pubowicze, z okazji świąt Nowego Roku składamy Wam w imieniu całej ekipy Pubu Drewutnia zyczenia;  zdrowych, spokojnych, rodzinnych i pełnych radości chwil 😊😇',
  },
  {
    id: uuidv4(),
    image: `${valentinesDay}`,
    name: 'Happy Walentines Day',
    date: '14 lutego',
    about: '14 lutego, coroczne święto zakochanych. Właśnie z tej okazji w piątek w naszym Pubie dla wszystkich zakochanych par na hasło "walentynki" czeka niespodzianka. Zapraszamy!',
  },
  {
    id: uuidv4(),
    image: `${womensDay}`,
    name: 'Dzień Kobiet',
    date: '8 marca',
    about: 'Z Okazji Dnia Kobiet najserdeczniejsze życzenia i uśmiechu każdego dnia życzy Pub Drewutnia.',
  },
  {
    id: uuidv4(),
    image: `${saintPatrik}`,
    name: 'Świętego Patryka',
    date: '17 marca',
    about: 'Dzisiaj piwko w kolorze zielonym!',
  },
  {
    id: uuidv4(),
    image: `${may}`,
    name: 'Majówka',
    date: '1 maja',
    about: 'Zapraszamy na odpoczynek na ogródku!!!',
  }, 
  {
    id: uuidv4(),
    image: `${beer}`,
    name: 'Oktoberfest',
    date: '21 września',
    about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, error.',
  },
  {
    id: uuidv4(),
    image: `${halloween}`,
    name: 'Wszystkich świętych',
    date: '29 października',
    about: 'Pan Dyniowaty zaprasza na Halowin.',
  },
];

