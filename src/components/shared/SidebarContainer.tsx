import styled from '@emotion/styled';
import sidebarBackground from '../../images/beer2.jpg';

export const SidebarContainer = styled.aside`
  width: 30%;
  //height: 100vh;
  margin-top: 160px;
  background-image: url(${sidebarBackground});
  background-color: #f0e7e7;
  background-size: contain;
  background-repeat: no-repeat;
  border: 10px solid #0fb9b1;
    border-radius: 60px;
    margin-right: 15px;
  float: right;
  padding: 20px;
  display: none;
  /* position: relative;
  top: 180px; */
  @media screen and (min-width: 768px) {
    display: block;
    }
`;