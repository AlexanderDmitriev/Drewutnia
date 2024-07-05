//import dish from '../../images/dish.png';
import orzeszki from '../../images/menu/sneki/felix-orzeszki-ziemne-smazone-i-solone-140-g.jpg';
import paluszki from '../../images/menu/sneki/paszuki-klasyczne.png';
import chipsy from '../../images/menu/sneki/chipsy.jpg';
import { v4 as uuidv4 } from 'uuid';

  export const sneki = [
    {
      id: uuidv4(),
      image: `${paluszki}`,
      name: 'Paluszki klasyczne',
      about:
        'Сhrupiąca przekąska z wyrazistym. Jest idealne na każdą okazję jak dla dzieci, tak i dla dorosłych. Produkty Lajkonik wypiekane w Skawinie pod Krakowem.',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${chipsy}`,
      name: 'Chipsy (musztrda, czosnek, paprika, chronowe lub solone)',
      about:
        'Popularna przekąska w postaci cienkich, osuszonych plastrów ziemniaków z różnymi smakami. Zawsze są dobrym dodatkiem do każdej imprezy czy spotkania towarzyskiego.',
      price: '10zł',
    },
    {
      id: uuidv4(),
      image: `${orzeszki}`,
      name: 'Orzeszki ziemne solone',
      about:
        'Orzeszki ziemne smażone są smaczną przekąską, po którą każdy chętnie sięga. Polecamy do piwa  wszystkim osobom, lubiącym przekąski na słono.',
      price: '10zł',
    },
  ];

