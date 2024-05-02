import styled from '@emotion/styled';

export const LabelTitle = styled.h2`
  font-family: Inter sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
  text-transform: uppercase;
  text-align: center;
  color: rgb(25, 25, 36);
  border-bottom: 1px solid rgb(65, 139, 119);
  div {
    height: 24px;
    display: block;
    border-top: 1px solid rgb(65, 139, 119);
  }
  @media screen and (min-width: 480px) {
    font-size: 48px;
  }
  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 110%;
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
    font-size: 100px;
    line-height: 120%;
    /* or 120px */
  }
`;