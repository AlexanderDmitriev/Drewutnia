import styled from '@emotion/styled';

export const HeaderLabel = styled.a`
  display: none;
  text-align: center;
  color: #242020;
  font-size: 18px;
  font-weight: 600;
  padding: 0 5px;
  transition: 0.25s linear;
  :hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: 500px) {
    display: block;
    font-size: 22px;
  }
  @media screen and (min-width: 768px) {
    display: block;
    font-size: 24px;
  }
  @media screen and (min-width: 1024px) {
    display: block;
    font-size: 26px;
  }
  
`;
