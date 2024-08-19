import ImageGallery from 'react-image-gallery';
import { useMediaQuery } from 'react-responsive';
import { GalleryContainer } from '../../shared';
import { imagesFormatter } from './imagesFormatter';

export const Gallery = ({ pictures }: any) => {
  const isTab = useMediaQuery({ query: '(min-width: 768px)' });
  const isAutoPlay = true;
  const onErrorImageURLMessage = 'OOPS';
  const slideInterval = 5000;
  const thumbnailPosition = isTab ? 'right' : 'bottom';
  return (
    <GalleryContainer>
      <ImageGallery
        items={imagesFormatter(pictures)}
        autoPlay={isAutoPlay}
        onErrorImageURL={onErrorImageURLMessage}
        slideInterval={slideInterval}
        thumbnailPosition={thumbnailPosition}
        lazyLoad={true}
        
      />
    </GalleryContainer>
  );
};
