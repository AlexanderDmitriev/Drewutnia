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

export const HeaderContainer = styled.div`
  margin: 0 auto;
  background-color: #202020;
  position: fixed;
  top: 0;
  left: 0px;
  width: 100vw;
`;

export const AdressContainer = styled.div`
  width: 95vw;
  height: 68px;
  margin: 0 auto;
  background-color: #ff8400;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  div {
    display: flex;
    justify-content: space-between;
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
  text-align: left;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 0 5px;
  ::before {
    content: url(${locationLogo});
    fill: #fff;
  }
  transition: 0.25s linear;
  :hover {
    transform: scale(1.05);
  }
`;

export const Facebook = styled.img`
  width: 48px;
  height: 48px;
  background-color: #1877f2;
  border-radius: 50%;
  margin: 0 10px;
  transition: 0.25s linear;
  :hover {
    transform: scale(1.05);
  }
`;

export const Instagram = styled.img`
  width: 48px;
  height: 48px;
  background-color: #e4405f;
  border-radius: 25%;
  margin: 0 10px;
  transition: 0.25s linear;
  :hover {
    transform: scale(1.05);
  }
`;
