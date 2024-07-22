import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentLocale: JSON.parse(window.localStorage.getItem('locale')) ?? {
      value: 'pl',
      label: 'PL',
    },
  };

  const localeSlice = createSlice({
    name: 'locale',
    initialState,
    reducers: {
      changeLanguege(state, action) {
        state.currentLocale = {
          value: action.payload.value,
          label: action.payload.label,
        };
      },
    },
  });

  export const store = configureStore({
    reducer: { locale: localeSlice.reducer },
  });

  export const { changeLanguege } = localeSlice.actions;