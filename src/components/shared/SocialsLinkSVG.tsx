import styled from '@emotion/styled';

export const SocialsLinkSVG = styled.svg`
  width: 32px;
  height: 32px;
  border-radius: 25%;
  margin: 0 10px;
  transition: 0.25s linear;
  background-color: #1877f2;
  :hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;