/* eslint-disable import/extensions */
// /**
//  * @format
//  */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { name as appName } from './app.json';
import store from './src/redux/store';

const ReturnApp = () => {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => ReturnApp);
