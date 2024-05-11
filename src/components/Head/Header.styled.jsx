import styled from '@emotion/styled';
import Select from 'react-select';
import locationLogo from '../../images/location2.svg';
import { HeaderLabel } from '../shared';

export const AdditionalNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  padding-right: 65px;
`;

export const SelectLanguege = styled(Select)`
  width: 100px;
  height: 50px;
  @media screen and (max-width: 768px) {
    margin-left: auto;
  }
`;

export const HeaderContainer = styled.section`
  margin: 0 auto;
  background-color: #202020;
  width: 100vw;
`;

export const AdressContainer = styled.div`
  width: 95vw;
  height: 85px;
  margin: 0 auto;
  background-color: #ff8400;
  padding: 10px 10px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  div {
    margin-right: 40px;
    @media screen and (min-width: 768px) {
      justify-content: space-between;
      margin-right: 0;
    }
    display: flex;
    justify-content: left;
  }
  ::after {
    content: '';
    display: block;
    width: 90vw;
    height: 8px;
    margin: 0 auto;
    background-color: #ffba00;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;

export const ContactsSection = styled.span`
  display: block;
`;

export const Adress = styled(HeaderLabel)`
  ::before {
    content: url(${locationLogo});
    fill: #f0e7e7;
  }
`;
