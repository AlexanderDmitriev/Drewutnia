import styled from 'styled-components';
import Flag from 'react-world-flags';
import Select from 'react-select';
import React, { useState } from 'react';

const SelectLanguege = styled(Select)`
  width: 100px;
  height: 50px;
`;

export const LanguegeButton = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'pl', label: <Flag code={'PL'} height="25" /> },
    { value: 'en', label: <Flag code={'US'} height="25"/> },
    { value: 'ua', label: <Flag code={'UA'} height="25" /> },
    { value: 'ru', label: <Flag code={'RU'} height="25" /> },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
    }),
    control: () => ({
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

  return (
    <>
      <SelectLanguege
      /* styles={customStyles} */
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder ={''}
      />
    </>
  );
};
