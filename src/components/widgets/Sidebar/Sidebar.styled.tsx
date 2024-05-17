import styled from '@emotion/styled';

export const SidebarTitle = styled.h2`
  font-family: 'Abril Fatface', cursive;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 0.03em;
  color: #f0e7e7;
  margin: 0;
  padding: 5px;
`;

export const SidebarText = styled.p`
  text-align: left;
  color: #f0e7e7;
  font-size: 14px;
  font-weight: 600;
  padding: 0 5px;
  cursor: pointer;
  transition: 0.25s linear;
  :hover {
    transform: scale(1.05);
  }
`;