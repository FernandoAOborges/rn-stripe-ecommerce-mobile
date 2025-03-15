import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo } from 'react';

import { HomeView } from '@/views';

export type TAuthenticatedRoutesParamList = {
  home: undefined;
};

export interface PageProps<T extends keyof TAuthenticatedRoutesParamList> {
  navigation: NativeStackNavigationProp<TAuthenticatedRoutesParamList, T>;
  route: RouteProp<TAuthenticatedRoutesParamList, T>;
}

export interface PageBottomProps<T extends keyof TAuthenticatedRoutesParamList> {
  navigation: BottomTabNavigationProp<TAuthenticatedRoutesParamList, T>;
  route: RouteProp<TAuthenticatedRoutesParamList, T>;
}

const BottomTab = createBottomTabNavigator({
  screens: {
    Home: HomeView,
  },
});

const AuthenticatedRoutes = createStaticNavigation(BottomTab);

export default memo(AuthenticatedRoutes);
