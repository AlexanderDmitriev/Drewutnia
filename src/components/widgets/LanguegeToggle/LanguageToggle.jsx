import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LanguageSelect } from './LanguageSelect';
import { changeLanguege } from '../../../redux/localeSlice';

export const LanguageToggle = ({ i18n }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: 'pl',
    label: 'PL',
  });

  const options = [
    { value: 'pl', label: 'PL' },
    { value: 'en', label: 'EN' },
    { value: 'ua', label: 'UA' },
  ];
  const dispatch = useDispatch();
  const currentLocale = useSelector(state => state.locale);

  const selectLanguegeHandler = event => {
    console.log(selectedOption);
    setSelectedOption({ value: event.value, label: event.value.toUpperCase() });
    i18n.changeLanguage(event.value);
    dispatch(
      changeLanguege({ value: event.value, label: event.value.toUpperCase() })
    );
  };

  return (
    <LanguageSelect
      defaultValue={selectedOption}
      onChange={selectLanguegeHandler}
      options={options}
      placeholder={`${currentLocale.label}`}
    />
  );
};
