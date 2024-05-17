import { Gallery } from '../components/entities';

export const GalleryDetailsPage = ({lastGallery}) => {
  //const { galleryId } = useParams();
  //const res = data.find(item => item.id === galleryId);
  return <>{lastGallery ? <Gallery pictures={lastGallery.gallery} /> : <p>oops</p>}</>;
};
