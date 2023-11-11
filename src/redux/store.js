import { configureStore } from '@reduxjs/toolkit';

import { carSlice } from './carSlice';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistContactsConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

const carsPersistReducer = persistReducer(
  persistContactsConfig,
  carSlice.reducer
);

export const store = configureStore({
  reducer: {
    cars: carsPersistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
