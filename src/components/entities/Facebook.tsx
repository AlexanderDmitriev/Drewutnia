import styled from '@emotion/styled';
import facebook from '../../images/facebook2.svg';
import {SocialsLink} from '../shared';

const Link = styled(SocialsLink)`
  background-color: #1877f2;

`;

export const Facebook = () => {
  return (
    <a
      href="https://www.facebook.com/Pub.Drewutnia"
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>
        <Link src={String(facebook)} alt="facebook" />
      </span>
    </a>
  );
};
