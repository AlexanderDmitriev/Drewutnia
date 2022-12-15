import React, { useState } from 'react';
import Flag from 'react-world-flags';
import {SelectLanguege} from './Header.styled';

export const LanguegeButton = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const options = [
      { value: 'pl', label: <Flag code={'PL'} height="25" width="40" /> },
      { value: 'en', label: <Flag code={'US'} height="25" width="40" /> },
      { value: 'ua', label: <Flag code={'UA'} height="25" width="40" /> },
      { value: 'ru', label: <Flag code={'RU'} height="25" width="40" /> },
    ];
  
    return (
      <>
        <SelectLanguege
          defaultValue={
            selectedOption |
            { value: 'pl', label: <Flag code={'PL'} height="25" width="40" /> }
          }
          onChange={setSelectedOption}
          options={options}
          placeholder={<Flag code={'PL'} height="25" width="40" />}
        />
      </>
    );
  };