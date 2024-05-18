import { Gallery } from '../components/entities';

export const GalleryDetailsPage = ({lastGallery}:any) => {
  //const { galleryId } = useParams();
  //const res = data.find(item => item.id === galleryId);
  return <>{lastGallery ? <Gallery pictures={lastGallery.gallery} /> : <p>oops</p>}</>;
};
