import { v4 as uuidv4 } from 'uuid';
import { naszLocalArray } from '../../images/gallery/naszLokal/naszLocal';
import { historyImagesArray } from '../../images/gallery/history/historyImages';
import { rynek20230319ImagesArray } from '../../images/gallery/rynek20230319/rynek20230319Images';
import { rynek20230617ImagesArray } from '../../images/gallery/rynek20230617/rynek20230617';
import { rynek20240211ImagesArray } from '../../images/gallery/rynek20240211/rynek20240211';
import { rynek20240317ImagesArray } from '../../images/gallery/rynek20240317/rynek20240317';
import { IGalleryType } from '../Interfaces/IGalleryType';

export const data:IGalleryType[] = [
    {
      id: uuidv4(),
      title: 'Nasze localy',
      message: 'Zdjęcia naszego pubu',
      gallery: naszLocalArray,
    },
    {
      id: uuidv4(),
      title: 'Rynek 17-03-2024',
      message: 'Ryneczek',
      gallery: rynek20240317ImagesArray,
    },
    {
      id: uuidv4(),
      title: 'Rynek 11-02-2024',
      message: 'Ryneczek',
      gallery: rynek20240211ImagesArray,
    },
    {
      id: uuidv4(),
      title: 'Rynek 17-06-2023',
      message: 'Ryneczek',
      gallery: rynek20230617ImagesArray,
    },
    {
      id: uuidv4(),
      title: 'Rynek 19-03-2023',
      message: 'Ryneczek',
      gallery: rynek20230319ImagesArray,
    },
    {
      id: uuidv4(),
      title: 'Nasza historię',
      message: 'To było już za nami',
      gallery: historyImagesArray,
    },
  ];