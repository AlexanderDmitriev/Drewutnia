import styled from '@emotion/styled';

export const Burger = styled.button`
  position: absolute;
  top: 25%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    background-color: #effffa;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    &::before,
    &::after {
      content: '';
      background-color: #191924;
      width: 2.5rem;
      height: 2px;
      display: inline-block;
      position: absolute;
      left: 0;
    }
    :first-child {
      transform: ${({ open }:any) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      color: #191924;
    }
    :nth-child(2) {
      opacity: ${({ open }:any) => (open ? '0' : '1')};
      transform: ${({ open }:any) => (open ? 'translateX(20px)' : 'translateX(0)')};
      color: #191924;
    }
    :nth-child(3) {
      transform: ${({ open }:any) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      color: #191924;
    }
  }
`;

/****TEST*** */
/* <Burger>
  <div />
  <div />
  <div />
</Burger>; */