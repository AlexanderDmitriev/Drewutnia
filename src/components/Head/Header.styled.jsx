import styled from 'styled-components';
import Flag from 'react-world-flags';
import Select from 'react-select';
import React, { useState } from 'react';

export const AdditionalNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & :not(:last-child) {
    margin-right: 8px;
  }
  /* @media screen and (min-width: 768px){
    position: fixed;
    top: 20px;
    left: 15px;
    right: 5rem;
  } */
`;

export const UserMenu = styled.div`
display: flex;
    align-items: center;
    padding-right: 65px;
`;

export const Logo = styled.img`
  height: 75px;
`;

const SelectLanguege = styled(Select)`
  width: 100px;
  height: 50px;
`;

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
          { value: 'pl', label: <Flag code={'PL'} height="25" width="40"/> }
        }
        onChange={setSelectedOption}
        options={options}
        placeholder={<Flag code={'PL'} height="25" width="40"/>}
      />
    </>
  );
};
