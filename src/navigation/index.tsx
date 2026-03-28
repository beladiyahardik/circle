import { View, Text } from 'react-native';
import React, { use } from 'react';
import { useUserStore } from '../store/useUserStore';
import AppNavigator from './AppNavigation';
import AuthNavigator from './AuthNavigation';

const RootNavigation = () => {
  const { user } = useUserStore();
  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigation;
