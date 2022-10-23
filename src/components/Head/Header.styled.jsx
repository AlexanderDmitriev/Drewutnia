import styled from 'styled-components';
import Flag from 'react-world-flags';

const LanguegeButtonStyled = styled.button`
  align-items: center;
  display: inline-flex;
  position: relative;
  border: none;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-radius: 50%;
`;

export const LanguegeButton = () => {
  return (
    <LanguegeButtonStyled>
      <Flag code={'PL'} height="25" />
    </LanguegeButtonStyled>
  );
};
