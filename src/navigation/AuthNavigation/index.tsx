import React from 'react';

import Onboarding from '../../screens/auth/Onboarding';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
