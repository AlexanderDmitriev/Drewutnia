import styled from '@emotion/styled';

export const HeaderBlocks = styled.div`
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