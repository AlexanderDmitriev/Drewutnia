import styled from '@emotion/styled';

export const LabelSmall = styled.p`
  font-family: Arial, "Trebuchet MS", sans-serif;;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 110%;
  color: rgb(25, 25, 36);
  background-color: rgba(240, 231, 231, 0.5);
  border-radius: 15px;
  padding: 5px 15px;
  margin-bottom: 10px;
  @media screen and (min-width: 480px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  span{
    font-weight: 600;
  }
`;