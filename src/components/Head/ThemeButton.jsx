import React, { useState } from 'react';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';
import styled from 'styled-components';

const ThemeButtonCustom = styled.button`
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

const ThemeButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <ThemeButtonCustom
        type="button"
        onClick={() => {
          handleChangeTheme();
        }} 
      >
        {!isDarkTheme ? <MdWbSunny size="25"/> : <MdDarkMode size="25"/>}
      </ThemeButtonCustom>
    </>
  );
};

export default ThemeButton;
