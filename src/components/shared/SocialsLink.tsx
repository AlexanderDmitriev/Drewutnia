import styled from '@emotion/styled';

export const SocialsLink = styled.img`
  width: 32px;
  height: 32px;
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