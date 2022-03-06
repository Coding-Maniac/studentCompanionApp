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

import AppLoginScreen from './src/screens/auth/AppLoginScreen';
import {ThemeProvider} from 'react-native-elements';

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  //
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView>
      <ThemeProvider>
        <AppLoginScreen />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
