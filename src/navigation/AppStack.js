import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppLoginScreen from '../screens/auth/AppLoginScreen';
import {
  APP_GRADES_SCREEN,
  APP_HOME_SCREEN,
  APP_INTERNAL_CALCULATOR_SCREEN,
  APP_LOGIN_SCREEN,
  APP_SIGNUP_SCREEN,
} from './Routes';
import AppSignUpScreen from '../screens/auth/AppSignUpScreen';
import {Text} from 'react-native';
import AppHomeScreen from '../screens/Attendance/AppHomeScreen';
import BottomTab from './BottomTab';
import AppGradesScreen from '../screens/Attendance/AppGradesScreen';
import AppInternalsCalculator from '../screens/Attendance/AppInternalsCalculator';

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
    {
      name: APP_GRADES_SCREEN,
      component: AppGradesScreen,
      headerOptions: {
        title: 'Grades',
      },
    },
    {
      name: APP_INTERNAL_CALCULATOR_SCREEN,
      component: AppInternalsCalculator,
      headerOptions: {
        title: 'Internals Calculator',
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
