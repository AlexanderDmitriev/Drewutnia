import styled from '@emotion/styled';

export const GalleryContainer = styled.div`
  margin-bottom: 15px;
  margin: 0 auto;
  width: 360px;
  display: contents;
  margin: 0 auto;
  .image-gallery {
    width: 100vw;
    @media screen and (min-width: 480px) {
      min-height: 600px;
      width: 360px;
    }
    @media screen and (min-width: 768px) {
      min-height: 500px;
      min-width: 518px;
    }
    @media screen and (min-width: 1024px) {
      min-height: 768px;
      min-width: 768px;
    }
  }
`;
