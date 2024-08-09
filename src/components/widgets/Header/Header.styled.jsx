import styled from '@emotion/styled';
import Select from 'react-select';
import locationLogo from '../../../images/location2.svg';

export const SelectLanguege = styled(Select)`
  width: 100px;
  height: 50px;
  @media screen and (max-width: 768px) {
    margin-left: auto;
  }
`;

export const HeaderContainer = styled.header`
  margin: 0 auto;
  //background-color: #202020;
  width: 100vw;
  /* position: fixed;
  z-index: 1000; */
`;

export const ContactsSection = styled.span`
  display: block;
`;

export const Adress = styled.address`
  display: none;
  text-align: center;
  color: rgb(91 56 36);
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
  ::before {
    content: url(${locationLogo});
    fill: rgb(91 56 36);
  }
`;
