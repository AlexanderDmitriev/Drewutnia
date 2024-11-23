import styled from '@emotion/styled';
import instagram from '../../images/instagram2.svg';
import {SocialsLink} from '../shared';

const Link = styled(SocialsLink)`
  background-color: #e4405f;
`;

export const Instagram = () => {
  return (
    <a
      href="https://www.instagram.com/pub_drewutnia_krakow/#"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>
        <Link src={String(instagram)} alt="instagram" loading="lazy"/>
      </span>
    </a>
  );
};
