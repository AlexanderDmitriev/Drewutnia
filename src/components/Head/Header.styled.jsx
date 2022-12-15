import styled from 'styled-components';
import Select from 'react-select';
import back from '../../images/back.jpg';

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

export const Logo = styled.img`
  height: 75px;
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
  background-image: url(${back});
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`;
