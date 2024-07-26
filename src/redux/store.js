import { configureStore } from '@reduxjs/toolkit';
/* import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; */
import { changeLanguege } from './localeSlice';



export const store = configureStore({
  reducer: { [changeLanguege]:changeLanguege.reducer },
  /* middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    changeLanguege.middleware,
  ], */
});


//export const persistor = persistStore(store);
