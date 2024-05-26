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
      name: 'Piwo Holba',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${zywiec}`,
      name: 'Piwo Żywiec',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${kozel}`,
      name: 'Piwo Kozel (ciemne lub jasne)',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
    {
        id: uuidv4(),
        image: `${warka}`,
        name: 'Piwo Warka Strong',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${litovel}`,
        name: 'Piwo Litovel (cytrynowe, miodowe, przeniczne)',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${ksiazece}`,
        name: 'Piwo Książece (porter, ipa, złote)',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${lech}`,
        name: 'Piwo Lech 0,0',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${heineken}`,
        name: 'Piwo Heineken 0,0',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${desperados}`,
        name: 'Piwo Desperados',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${corona}`,
        name: 'Piwo Corona Extra',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${pilsner}`,
        name: 'Piwo Pilsner Urqruell',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${hardmade}`,
        name: 'Hardmade',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${caJack}`,
        name: 'Kapitan Jack',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${tarczyn}`,
        name: 'Sok Tarczyn (pomidor, czarna porzeczka)',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${cappy}`,
        name: 'Sok Cappy (pomarancz, jabłuko, greypfrut)',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${cocaCola}`,
        name: 'Coca-cola 0,5L',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${sprite}`,
        name: 'Sprite 0,5L',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${burn}`,
        name: 'Burn napoj energenyczny',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
      {
        id: uuidv4(),
        image: `${kropla}`,
        name: 'Woda Kropla Beskidu (gazowana lub niegazowana)',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
        price: '10zł',
      },
  ];