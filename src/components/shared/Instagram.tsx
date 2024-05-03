import styled from '@emotion/styled';
import instagram from '../../images/instagram2.svg';

const Link = styled.img`
  width: 32px;
  height: 32px;
  background-color: #e4405f;
  border-radius: 25%;
  margin: 0 10px;
  transition: 0.25s linear;
  :hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const Instagram = () => {
  return (
    <a
      href="https://www.instagram.com/explore/locations/747190841/pub-drewutnia/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>
        <Link src={String(instagram)} alt="instagram" />
      </span>
    </a>
  );
};
