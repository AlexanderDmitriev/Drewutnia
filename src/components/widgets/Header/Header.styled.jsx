import styled from '@emotion/styled';
import Select from 'react-select';
import locationLogo from '../../../images/location2.svg';
import { HeaderLabel } from '../../shared';

export const SelectLanguege = styled(Select)`
  width: 100px;
  height: 50px;
  @media screen and (max-width: 768px) {
    margin-left: auto;
  }
`;

export const HeaderContainer = styled.header`
  margin: 0 auto;
  background-color: #202020;
  width: 100vw;
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
