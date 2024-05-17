import { HomePageGallery } from '../components/HomePageGallery';

export const GalleryDetailsPage = ({lastGallery}) => {
  //const { galleryId } = useParams();
  //const res = data.find(item => item.id === galleryId);
  return <>{lastGallery ? <HomePageGallery pictures={lastGallery.gallery} /> : <p>oops</p>}</>;
};
