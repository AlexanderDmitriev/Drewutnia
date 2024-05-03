import styled from '@emotion/styled';

const CustomFooter = styled.footer`
  width: 100vw;
  padding: 10px;
  background-color: #202020;

`;

const FooterText = styled.p`
  text-align: left;
  color: #f0e7e7;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 5px;
  padding-left: 15px;
  margin: 0;
`;

export const Footer = () => {
  return (
    <CustomFooter>
      <FooterText>
        Pub Drewutnia - ©2013 Wszystkie prawa zastrzeżone.
      </FooterText>
      <FooterText>Pictures designed by Freepik</FooterText>
    </CustomFooter>
  );
};
