/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//  import { LogBox } from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import store from 'multikurirkurir/src/stores/store'
import { Provider } from 'react-redux'
import { NativeBaseProvider } from "native-base"
import {StatusBar} from 'react-native';

function App() {
  //  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  //  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar
          backgroundColor="#83ccff"/>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};
  
  export default App;