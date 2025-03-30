import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
