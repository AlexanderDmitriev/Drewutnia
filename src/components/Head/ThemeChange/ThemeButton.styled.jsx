import styled from 'styled-components';

export const ThemeButtonCustom = styled.button`
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  transition-property: color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: linear;

  &:hover,
  &:focus {
    color: red;
    box-shadow: 1px 1px 5px var(--company-color);
  }
`;