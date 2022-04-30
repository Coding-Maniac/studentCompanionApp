import React from 'react';
import {View, Text} from 'react-native';

const GlobalNavWrapper = ({children}) => {
  return (
    <View>
      <View
        style={{
          marginBottom: 100,
        }}>
        {children}
      </View>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <Text>Home</Text>
        <Text>Internals</Text>
      </View>
    </View>
  );
};

export default GlobalNavWrapper;
