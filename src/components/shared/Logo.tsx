import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';

const LogoDrewutnia = styled.img`
  height: 60px;
  transition: 0.25s linear;
  :hover {
    transform: scale(1.05);
  }
`;

export const Logo = () => {
  return (
    <NavLink to="/">
      <span>
        <LogoDrewutnia src={logo} alt="Drewutnia" />
      </span>
    </NavLink>
  );
};
