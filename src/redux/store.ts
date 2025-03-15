import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import reactotron from '../../ReactotronConfig';

import authAPI from './queryRTK/authAPI';
import Authentication from './slices/AuthenticationSlice';
import Theme from './slices/ThemeSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['theme'],
  //   blacklist: ['companies', 'banners'],
};

const rootReducer = combineReducers({
  theme: Theme,
  authentication: Authentication,
  [authAPI.reducerPath]: authAPI.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(reactotron.createEnhancer()),
  // @ts-expect-error - serializableCheck: false, immutableCheck: false
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(authAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
