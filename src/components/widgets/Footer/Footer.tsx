import { CustomFooter } from './Footer.styled';
import { FooterText } from './Footer.styled';

export const Footer = () => {
  return (
    <CustomFooter>
      <FooterText>
        Pub Drewutnia - ©2013 Wszystkie prawa zastrzeżone.
      </FooterText>
      <a
        href="http://www.freepik.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FooterText>Pictures designed by Freepik</FooterText>
      </a>
    </CustomFooter>
  );
};
