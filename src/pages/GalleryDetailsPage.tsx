import { Gallery } from '../components/entities';
import { ILastGallery } from '../components/Interfaces/IGalleryType';
import  NotFoundPage  from './NotFoundPage';
import { HiddenTitle } from '../components/shared';
import { NavLabel } from '../components/shared/NavigationLabel';

const GalleryDetailsPage = ({ lastGallery }: ILastGallery) => {
  //const { galleryId } = useParams();
  //const res = data.find(item => item.id === galleryId);
  return (
    <>
      {lastGallery ? (
        <section>
          <HiddenTitle>{lastGallery.title}</HiddenTitle>
          <NavLabel to="/gallery">Do galerii</NavLabel>
          <Gallery pictures={lastGallery.gallery} />
        </section>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
export default GalleryDetailsPage;
