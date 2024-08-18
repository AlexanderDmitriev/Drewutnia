import { Gallery } from '../components/entities';
import { ILastGallery } from '../components/Interfaces/IGalleryType';
import  NotFoundPage  from './NotFoundPage';
import { HiddenTitle } from '../components/shared';

const GalleryDetailsPage = ({ lastGallery }: ILastGallery) => {
  //const { galleryId } = useParams();
  //const res = data.find(item => item.id === galleryId);
  return (
    <>
      {lastGallery ? (
        <section>
          <HiddenTitle>{lastGallery.title}</HiddenTitle>
          <Gallery pictures={lastGallery.gallery} />
        </section>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
export default GalleryDetailsPage;
