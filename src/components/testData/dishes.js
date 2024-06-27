import dish from '../../images/dish.png';
import kielbasa from '../../images/menu/dania/kielbasa.jpg';
import kaszanka from '../../images/menu/dania/kaszanka.jpg'
import pierogi from '../../images/menu/dania/pierogi.jpg';
import zapiekanka from '../../images/menu/dania/zapiekanka.jpg';
import sledz from '../../images/menu/dania/Śledz z cebulką.jpg';
import kawaParzona from '../../images/menu/dania/kawaParzona.jpg';
import smalec from '../../images/menu/dania/smalec.jpg';
import coffee from '../../images/menu/dania/coffee.jpg';
import { v4 as uuidv4 } from 'uuid';

  export const dishesSomethingToEat = [
    {
      id: uuidv4(),
      image: `${kielbasa}`,
      name: 'Kielbasa z ogniska',
      about:
        'Ugotowana za narodowymi tradycjami kielbasa z grilla jest najlepszą przekąską do piwa. Równierz dobrze przyrządzoną kielbasę oferuje bardzo satysfakcjonujący smak i wyjątkowy aromat.',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${kaszanka}`,
      name: 'Kaszanka z cebulką',
      about:
        'Znana i uwielbiana w całym kraju kaszanka. Idealny i prosty posiłek, który serdecznie przyrządzony na patelni z cabulą. Szybka i pyszna kolacja po ciężkim dniu. Mianowicie: kaszy gryczanej, krwi wieprzowej oraz  podrobów takich jak wątróbka, płuca czy ozór. Smakuje jak w domu. Smacznego!',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${zapiekanka}`,
      name: 'Zapiekanka',
      about:
        'Kultowy polski przysmak, który stał naprawde narodowym. Bagietka, ser, pieczarki i ketchup. Bardzo prostę, ale i bardzo pysznę. Odwiedzający nasz kraj nazywają ją polish grill sandwich (polską grilowaną kanapką) i mają także swoje ulubione lokalizacje. Doskonałe dla ugaszenia głodu.',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${pierogi}`,
      name: 'Pierogi (mięso, ziemniaki lub kapusta)',
      about:
        'Jedno z najbardziej popularnych polskich dań.Trudno znaleźć kogoś, kto by ich nie lubił. Zrobione z cienkiego, elastycznego i dobrze zlepiającego się ciasta. Oferujemy pierogi z mięsem, ziemniakami lub z kapustą. Przy serwie dodajemy trochę smalca i tajnego składnika dla pyszności i waszej przyjemności.',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${sledz}`,
      name: 'Śledz z cebulką',
      about:
        'Wolisz coś tradycyjnego i pysznego? Polecamy takie pikantne danie jak śledzie z cebulą. Dobrze przygotowany śledź w oleju jest miękki, delikatny i rozpływający się w ustach.',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${smalec}`,
      name: 'Smalec z ogórkiem',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${dish}`,
      name: 'Popkorn',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${dish}`,
      name: 'Lody',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${dish}`,
      name: 'Kawa mrorzona',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${coffee}`,
      name: 'Kawa (late, capucino, espresso)',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${kawaParzona}`,
      name: 'Kawa parzona',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${dish}`,
      name: 'Frytki',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
  ];


