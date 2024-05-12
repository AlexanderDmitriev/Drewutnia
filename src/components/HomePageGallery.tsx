import ImageGallery from 'react-image-gallery';
import { useMediaQuery } from 'react-responsive';
import styled from '@emotion/styled';
import {imagesFormatter} from './imagesFormatter';

const GalleryContainer = styled.div`
  margin-bottom: 15px;
  margin: 0 auto;
  width: 360px;
  display: contents;
  @media screen and (min-width: 480px) {
    min-height: 600px;
    width: 360px;
  }
  @media screen and (min-width: 768px) {
    min-height: 500px;
    min-width: 518px;
  }
`;

/* const images = [
  {
    original: `${String(home1)}`,
    thumbnail: `${String(home1min)}`,
    lazyLoad: true,
    originalHeight: 480,
  },
  {
    original: `${String(home2)}`,
    thumbnail: `${String(home2min)}`,
    lazyLoad: true,
    originalHeight: 480,
  },
  {
    original: `${String(home3)}`,
    thumbnail: `${String(home3min)}`,
    lazyLoad: true,
    originalHeight: 480,
  },
  {
    original: `${String(home4)}`,
    thumbnail: `${String(home4min)}`,
    lazyLoad: true,
    originalHeight: 480,
  },
  {
    original: `${String(home5)}`,
    thumbnail: `${String(home5min)}`,
    lazyLoad: true,
    originalHeight: 480,
  },
  {
    original: `${String(home6)}`,
    thumbnail: `${String(home6min)}`,
    lazyLoad: true,
    originalHeight: 480,
  },
  {
    original: `${String(home7)}`,
    thumbnail: `${String(home7min)}`,
    lazyLoad: true,
    originalHeight: 480,
  },
  {
    original: `${String(home8)}`,
    thumbnail: `${String(home8min)}`,
    lazyLoad: true,
    originalHeight: 480,
  },
]; */

export const HomePageGallery = ({ pictures }: any) => {
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
      />
    </GalleryContainer>
  );
};
