import React from 'react';

import BottomTabBarNavigator from './BottomTabBarNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="bottomTabBar" component={BottomTabBarNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
