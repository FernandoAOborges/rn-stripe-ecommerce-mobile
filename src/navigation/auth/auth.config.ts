import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { INITIAL_ROUTENAME_UNAUTHENTICATED } from '@/config';
import { withSuspenseScreen } from '@/utils';

import * as Views from './auth.views';

const screenOptions = {
  headerShown: false,
};

const RootStack = createNativeStackNavigator({
  initialRouteName: INITIAL_ROUTENAME_UNAUTHENTICATED,
  screens: {
    Walkthrough: withSuspenseScreen(Views.WalkthroughView),
    Login: withSuspenseScreen(Views.LoginView),
    ForgotPassword: withSuspenseScreen(Views.ForgotPasswordView),
    Register: withSuspenseScreen(Views.RegisterView),
  },
  screenOptions,
});

export default RootStack;
