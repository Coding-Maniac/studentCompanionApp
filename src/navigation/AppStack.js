import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppLoginScreen from '../screens/auth/AppLoginScreen';
import {APP_LOGIN_SCREEN, APP_SIGNUP_SCREEN} from './Routes';
import AppSignUpScreen from '../screens/auth/AppSignUpScreen';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={APP_LOGIN_SCREEN} component={AppLoginScreen} />
        <Stack.Screen name={APP_SIGNUP_SCREEN} component={AppSignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
