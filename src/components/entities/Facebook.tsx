import styled from '@emotion/styled';
import facebook from '../../images/facebook2.svg';
/* import sprite from '../../images/symbols.svg'; */
import { SocialsLink, /* SocialsLinkSVG */ } from '../shared';

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
 {/*        <SocialsLinkSVG>
          <use
            href={`${String(sprite)}#icon-facebook`}
            width="32"
            height="32"
          ></use>
        </SocialsLinkSVG> */}
        <Link src={String(facebook)} alt="facebook" />
      </span>
    </a>
  );
};
