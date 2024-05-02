import styled from '@emotion/styled';
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
    <a href="logo">
      <span>
        <LogoDrewutnia src={logo} alt="Drewutnia" />
      </span>
    </a>
  );
};
