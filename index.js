import React from 'react'

import { AppRegistry } from 'react-native';
import App from './App';

import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

const reactNativeReduxFetch = () => (
  <Provider store={store}>
    <App />
  </Provider>
)




AppRegistry.registerComponent('reactNativeReduxFetch', () => reactNativeReduxFetch);
