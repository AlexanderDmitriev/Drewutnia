import styled from '@emotion/styled';
import Select from 'react-select';
import locationLogo from '../../images/location2.svg';

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

export const HeaderContainer = styled.header`
  margin: 0 auto;
  background-color: #202020;
  position: absolute;
  width: 100vw;
`;

export const AdressContainer = styled.div`
  width: 95vw;
  height: 68px;
  margin: 0 auto;
  background-color: #ff8400;
  padding: 5px 10px;
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

export const Adress = styled.p`
  display: none;
  text-align: left;
  color: #f0e7e7;
  font-size: 12px;
  font-weight: 600;
  padding: 0 5px;
  ::before {
    content: url(${locationLogo});
    fill: #f0e7e7;
  }
  transition: 0.25s linear;
  :hover {
    transform: scale(1.05);
  }
  @media screen and (min-width: 480px) {
    display: block;
    font-size: 14px;
  }
`;


