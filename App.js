/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';

import {ThemeProvider} from 'react-native-elements';
import AppSignUpScreen from './src/screens/auth/AppSignUpScreen';
import AppLoginScreen from './src/screens/auth/AppLoginScreen';

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  //
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView>
      <ThemeProvider>
        <AppSignUpScreen />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
