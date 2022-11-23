import React, { useState } from 'react';
import { MdDarkMode,MdWbSunny } from "react-icons/md";

const ThemeButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          handleChangeTheme();
        }} /* onClick={setIsDark(true)} */
      >
        {!isDarkTheme ? <MdWbSunny/> : <MdDarkMode/>}
      </button>
    </>
  );
};

export default ThemeButton;
