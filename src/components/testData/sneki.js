import dish from '../../images/dish.png';
import orzeszki from '../../images/menu/sneki/felix-orzeszki-ziemne-smazone-i-solone-140-g.jpg';
import paluszki from '../../images/menu/sneki/paszuki-klasyczne.png';
import { v4 as uuidv4 } from 'uuid';

  export const sneki = [
    {
      id: uuidv4(),
      image: `${paluszki}`,
      name: 'Paluszki klasyczne',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${dish}`,
      name: 'Chipsy (musztrda, czosnek, paprika, chronowe lub solone)',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${orzeszki}`,
      name: 'Orzeszki ziemne solone',
      about:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum tellus nulla, et auctor tortor iaculis et. Nam sed sem nulla. Quisque sit amet ex nec nulla scelerisque commodo. Nulla egestas in tortor ac mattis. Curabitur vel porttitor dui, at rutrum sapien. Suspendisse interdum quam euismod justo bibendum fringilla. ',
      price: '10zł',
    },
  ];

