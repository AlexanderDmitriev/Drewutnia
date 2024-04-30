import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 16px 32px;
  border-radius: 8px;
  display: block;
  min-width: 152px;
  margin: 0 auto;
  font-family: Inter sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 110%;
  /* or 26px */
  background-color: #418b77;
  border: none;
  color: #fbfcfe;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    display: inline;
    font-size: 22px;
    min-width: 174px;
  }
  &:hover,
  :focus {
    background-color: rgb(237, 237, 105);
    color: #000;
  }
`;


//*************TEST************////////
/* <Button>TEST</Button> */