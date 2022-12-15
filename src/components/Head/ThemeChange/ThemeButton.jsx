import React from 'react';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';
import { ThemeButtonCustom } from './ThemeButton.styled';

const ThemeButton = ({ isDarkTheme, handleChangeTheme }) => {
  return (
    <>
      <ThemeButtonCustom
        type="button"
        onClick={() => {
          handleChangeTheme();
        }}
      >
        {!isDarkTheme ? <MdWbSunny size="30" /> : <MdDarkMode size="30" />}
      </ThemeButtonCustom>
    </>
  );
};

export default ThemeButton;
