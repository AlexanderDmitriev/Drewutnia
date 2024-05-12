import { HomePageGallery } from '../components/HomePageGallery';
import { useParams } from 'react-router-dom';
import { data } from '../components/data';

export const GalleryDetailsPage = () => {
  const { galleryId } = useParams();
  const res = data.find(item => item.id === galleryId);
  return <>{res ? <HomePageGallery pictures={res.gallery} /> : <p>oops</p>}</>;
};
