import { Gallery } from '../components/entities';
import { ILastGallery } from '../components/Interfaces/IGalleryType';
import { NotFoundPage } from './NotFoundPage';

export const GalleryDetailsPage = ({ lastGallery }: ILastGallery) => {
  //const { galleryId } = useParams();
  //const res = data.find(item => item.id === galleryId);
  return (
    <>
      {lastGallery ? (
        <Gallery pictures={lastGallery.gallery} />
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
