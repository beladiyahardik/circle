import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import React from 'react';
import HomeScreen from '../../../screens/app/HomeScreen';
import ProfileScreen from '../../../screens/app/ProfileScreen';

const Tab = createNativeBottomTabNavigator();

const BottomTabBarNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabBarNavigator;
