import styled from '@emotion/styled';
import facebook from '../../images/facebook2.svg';

const Link = styled.img`
  width: 32px;
  height: 32px;
  background-color: #1877f2;
  border-radius: 50%;
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

export const Facebook = () => {
  return (
    <a
      href="https://www.facebook.com/Pub.Drewutnia"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>
        <Link src={String(facebook)} alt="instagram" />
      </span>
    </a>
  );
};
