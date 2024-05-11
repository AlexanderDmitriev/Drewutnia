import styled from '@emotion/styled';

export const HeaderLabel = styled.p`
  display: none;
  text-align: center;
  color: #f0e7e7;
  font-size: 12px;
  font-weight: 600;
  padding: 0 5px;
  transition: 0.25s linear;
  :hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: 500px) {
    display: block;
    font-size: 14px;
  }
`;