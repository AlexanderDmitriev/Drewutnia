import { Gallery } from '../components/entities/Gallery';

export const GalleryDetailsPage = ({lastGallery}) => {
  //const { galleryId } = useParams();
  //const res = data.find(item => item.id === galleryId);
  return <>{lastGallery ? <Gallery pictures={lastGallery.gallery} /> : <p>oops</p>}</>;
};
