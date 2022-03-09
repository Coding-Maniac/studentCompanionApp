/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {ThemeProvider} from 'react-native-elements';
import AppStack from './src/navigation/AppStack';

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  //
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <ThemeProvider>
      <AppStack />
    </ThemeProvider>
  );
};

export default App;
