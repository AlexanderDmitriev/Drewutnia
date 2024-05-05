import ImageGallery from 'react-image-gallery';
import { useMediaQuery } from 'react-responsive';
import home1 from '../images/homePageImages/home1.jpg';
import home1min from '../images/homePageImages/resized/home1.jpg';
import home2 from '../images/homePageImages/home2.jpg';
import home2min from '../images/homePageImages/resized/home2.jpg';
import home3 from '../images/homePageImages/home3.jpg';
import home3min from '../images/homePageImages/resized/home3.jpg';
import home4 from '../images/homePageImages/home4.jpg';
import home4min from '../images/homePageImages/resized/home4.jpg';
import home5 from '../images/homePageImages/home5.jpg';
import home5min from '../images/homePageImages/resized/home5.jpg';
import home6 from '../images/homePageImages/home6.jpg';
import home6min from '../images/homePageImages/resized/home6.jpg';
import home7 from '../images/homePageImages/home7.jpg';
import home7min from '../images/homePageImages/resized/home7.jpg';
import home8 from '../images/homePageImages/home8.jpg';
import home8min from '../images/homePageImages/resized/home8.jpg';
import styled from '@emotion/styled';

const GalleryContainer = styled.div`
  margin-bottom: 15px;
  margin: 0 auto;
  width: 360px;
  @media screen and (min-width: 480px) {
    height: 600px;
    width: 360px;
    }
  @media screen and (min-width: 768px) {
    height: 500px;
    min-width: 518px;
    }
`;

const images = [
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
];

export const HomePageGallery = () => {
  const isTab = useMediaQuery({ query: '(min-width: 768px)' });
  const isAutoPlay = true;
  const onErrorImageURLMessage = 'OOPS';
  const slideInterval = 5000;
  const thumbnailPosition = isTab?'right':'bottom';
  return (
    <GalleryContainer>
      <ImageGallery
        items={images}
        autoPlay={isAutoPlay}
        onErrorImageURL={onErrorImageURLMessage}
        slideInterval={slideInterval}
        thumbnailPosition={thumbnailPosition}
      />
    </GalleryContainer>
  );
};
