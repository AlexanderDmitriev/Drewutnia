import styled from '@emotion/styled';

export const NavigationList = styled.ul`
  padding: 15px;
  list-style: none;
  margin: 5px 0;
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  }
  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;