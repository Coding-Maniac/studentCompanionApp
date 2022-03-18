import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppLoginScreen from '../screens/auth/AppLoginScreen';
import {APP_HOME_SCREEN, APP_LOGIN_SCREEN, APP_SIGNUP_SCREEN} from './Routes';
import AppSignUpScreen from '../screens/auth/AppSignUpScreen';
import {Text} from 'react-native';
import AppHomeScreen from '../screens/Attendance/AppHomeScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const screenNavigationDetails = [
    {
      name: APP_LOGIN_SCREEN,
      component: AppLoginScreen,
      headerOptions: {
        title: 'Login',
      },
    },
    {
      name: APP_SIGNUP_SCREEN,
      component: AppSignUpScreen,
      headerOptions: {
        title: 'Sign Up',
      },
    },
    {
      name: APP_HOME_SCREEN,
      component: AppHomeScreen,
      headerOptions: {
        title: 'Home',
      },
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={APP_LOGIN_SCREEN}>
        {screenNavigationDetails.map(data => (
          <Stack.Screen
            name={data.name}
            component={data.component}
            options={{headerTitleAlign: 'center', ...data?.headerOptions}}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
