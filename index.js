/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';
import configureStore from './redux/store/configureStore';

const store = configureStore()

const RNRedux = () => (
  <Provider store={ store }>
    <App/>
  </Provider>
)

enableScreens();
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => RNRedux);