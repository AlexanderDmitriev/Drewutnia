/* import dish from '../../images/dish.png'; */
import burn from '../../images/menu/napoje/BURN_ENERGY_DRINK-logo-6A5EB18610-seeklogo.com.png';
import cappy from '../../images/menu/napoje/cappy.jpg';
import caJack from '../../images/menu/napoje/captain-jack.png';
import cocaCola from '../../images/menu/napoje/coca-cola-emblem.jpg';
import corona from '../../images/menu/napoje/Corona-Extra-Logo.png';
import desperados from '../../images/menu/napoje/desperados.jpg';
import heineken from '../../images/menu/napoje/heineken.png';
import holba from '../../images/menu/napoje/Holba.jpg';
import kozel from '../../images/menu/napoje/kozel.png';
import kropla from '../../images/menu/napoje/kroplabeskidu-logo.png';
import ksiazece from '../../images/menu/napoje/ksiazece-logo.png';
import lech from '../../images/menu/napoje/lech.jpg';
import litovel from '../../images/menu/napoje/litovel.png';
import tarczyn from '../../images/menu/napoje/tarczyn.jpg';
import pilsner from '../../images/menu/napoje/Pilsner-Urquell-logo.jpg';
import sprite from '../../images/menu/napoje/sprite-logo-0FD1748C65-seeklogo.com.png';
import warka from '../../images/menu/napoje/warkaStrong.jpg';
import zywiec from '../../images/menu/napoje/zywiec_nowelogo_655.png';
import hardmade from '../../images/menu/napoje/hardmade.jpg';
import { v4 as uuidv4 } from 'uuid';

export const napoje = [
    {
      id: uuidv4(),
      image: `${holba}`,
      name: 'Piwo Holba 0,5L',
      about:
        'Klasyczne czeskie piwo z delikatnym smakiem. Ono warzy się na wodie z jaskin krasowych, dlatego jest niekwaśnym, w odróżnieniu od większości gatunków jasnego piwa. Browarnia Holba z Morawii pracuje od 1974 roku i jest jednym z największych producentów z Czechów. ',
      price: '15zł',
    },
    {
      id: uuidv4(),
      image: `${zywiec}`,
      name: 'Piwo Żywiec 0,5L',
      about:
        'Lager, pochodzący z jednoimiennego miasta. Prozore, złociste piwo z przyjemną pianą. Czysty słabosłodny smak i dobra filtracja obdarze przyjemność po ciężkiemu dniu. ',
      price: '15zł',
    },
    {
      id: uuidv4(),
      image: `${kozel}`,
      name: 'Piwo Kozel 0,5L (ciemne lub jasne)',
      about:
        'wyprodukowane w Polsce po licencji czeskie piwo utrzymuje 150-letnie traducji i smak gorzko-aromatycznego żatieckiego chmielu Premiant',
      price: '15zł',
    },
    {
        id: uuidv4(),
        image: `${warka}`,
        name: 'Piwo Warka Strong 0,5L',
        about:
          'mocny lager (6,3%), który charakteryzuje się bogatym słodowo-chmielowym smakiem i bursztynową barwą. Warka Strong to jest piwo o doskonałej jakości dla miłośników głębokiego smaku.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${litovel}`,
        name: 'Piwo Litovel 0,5L (cytrynowe, miodowe lub przeniczne)',
        about:
          'Czeski lager od browarni, historia której liczące już 700 lat. Ugotowany w tradycijnyj sposób, charakterystychny bogatym, nasyconym smakiem z nutkami bogiemskiego solodu i chmelu. A dziękując wytrzymałości w przeciągu 6 tygodnów piwo nabywa bogaty charakter.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${ksiazece}`,
        name: 'Piwo Książece 0,5L (porter, ipa lub złote)',
        about:
          'kolekcja specjalności od mistrzów browarnych z Tyskie Browary Książęce. Róźnorodne piwo dla wszystkich poszukujących bogatego i głębokiego smaku.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${lech}`,
        name: 'Piwo Lech 0,0  0,5L',
        about:
          'bezalkoholowy lager w róźnych smakach dla fanów piwnej goryczki. Idealny na gorące dni lub do posiłków.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${heineken}`,
        name: 'Piwo Heineken 0,0 0,5L',
        about:
          '100% piwa, 0% alkoholu. Doskonałe piwo z naturalnym rzeźwym smakiem, dziękując tradycjam, rodząca się aż od 1873 roku.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${desperados}`,
        name: 'Piwo Desperados 0,4L',
        about:
          'Aromatyzowane piwo o smaku tequilii, znane w 35 krajach światu. Piwo zadziwia originalnoścu i charakterom. Smak balansuje między lokkoścu lagera, ekzotiką cytrusa i tequilią.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${corona}`,
        name: 'Piwo Corona Extra 0,355L',
        about:
          'Jasny lager, będący jednym z najbardziej sprzedawanych brendów piwa w świacie. Ono podbija świat osobliwym lekkim smakiem i poczuciem tropicznej świeżości. Piwo dobre harmonizuje z barbekiu, pizzą lub rybą grillowanej.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${pilsner}`,
        name: 'Piwo Pilsner Urqruell 0,5L',
        about:
          'Jasne czeskie piwo dolnej fermentacji. Smak Pilsner Urquell jest trochę ciężczym i więcej chmelowym, niż u większości lagerów. Osobliwościami receptury są gatunek chmelu Saaz (rostę tylko w Bohemii) i trzechgotowalne zacieranie słodowe na otwartym ogniu.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${hardmade}`,
        name: 'Hardmade 0,4L',
        about:
          'Piwo inspirowane rytmem miasta oraz wolnościu i relaksem. Rozmaite letni smaki dla twojej indywidualności.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${caJack}`,
        name: 'Capitan Jack 0,4L',
        about:
          'Zaskakujące piwo, które zaprasza do pirackich przygód. Ma jedny w swoim rodzaju smak z nutę karibskiego ruma. Najlepej pić zimnym z kapką cytryny.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${tarczyn}`,
        name: 'Sok Tarczyn 0,3L (pomidor lub czarna porzeczka)',
        about:
          'Stuprocentowe soki z polskich owoców. Wyprodukowane za nowoczesnymi technologijami. Doskonały naturalny skład i świeżość.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${cappy}`,
        name: 'Sok Cappy 0,25L (pomarancz, jabłuko lub greypfrut)',
        about:
          'Wysokojakociowe soki z wyjtkowym smakiem. Źrodlo witaminów, esencja dorzałych owoców w charakterystyczną butelkę.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${cocaCola}`,
        name: 'Coca-cola 0,5L',
        about:
          'Legendarna cola. Pyszna i orzeźwiająca o klasycznem smaku. Odświeży pod czas upału i dodaje sił. Polecamy z liodem. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${sprite}`,
        name: 'Sprite 0,5L',
        about:
          'Napój dla aktywnych i kreatywnych ludzi. Ma przyjemny rzeżwy smak cytryny i limonki. Polecamy do koktelów i z liodem.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${burn}`,
        name: 'Burn 0,25L napoj energenyczny',
        about:
          'Unikalny napój energetyczny z łagodnym przyjemnym smakiem. Kofeina, tauryna + guarana uwolną energiję, zmniejszą zmęczenie i obudzę w tobie ogień.',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${kropla}`,
        name: 'Woda Kropla Beskidu 0,33L (gazowana lub niegazowana)',
        about:
          'Naturalna czysta woda mineralna z serca Beskidów. Doskonały wybór dla ugaszenia pragnenia. Niskomineralizowana woda powstrzymuje apetyt i poprawia trawienie.',
        price: '10zł',
      },
  ];