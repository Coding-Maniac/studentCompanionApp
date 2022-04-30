import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {APP_HOME_SCREEN} from './Routes';
import AppHomeScreen from '../screens/Attendance/AppHomeScreen';
const Tabs = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={APP_HOME_SCREEN} component={AppHomeScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTab;
