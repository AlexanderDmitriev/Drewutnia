import styled from '@emotion/styled';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:  #ff8400;
  height: 100%;
  width: 100%;
  text-align: left;
  align-items: center;
  padding: 2rem;
  position: absolute;
  top: 85px;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

`;