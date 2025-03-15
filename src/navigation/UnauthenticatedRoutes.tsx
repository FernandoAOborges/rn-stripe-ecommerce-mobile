import { createStaticNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useRef } from 'react';

import { INITIAL_ROUTENAME_UNAUTHENTICATED } from '@/config';
import { logAnalyticsScreenView } from '@/services/monitoring/analytics';
import { logErrorToCrashlytics } from '@/services/monitoring/crashlytics';
import { WalkthroughView, LoginView, ForgotPasswordView, RegisterView } from '@/views';

export type TUnauthenticatedRoutesParamList = {
  Walkthrough: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Register: undefined;
};

const screenOptions = {
  headerShown: false,
};

const RootStack = createNativeStackNavigator({
  initialRouteName: INITIAL_ROUTENAME_UNAUTHENTICATED,
  screens: {
    Walkthrough: WalkthroughView,
    Login: LoginView,
    ForgotPassword: ForgotPasswordView,
    Register: RegisterView,
  },
  screenOptions,
});

const Navigation = createStaticNavigation(RootStack);

const UnauthenticatedRoutes = () => {
  const navigationRef = useNavigationContainerRef<TUnauthenticatedRoutesParamList>();
  const routeNameRef = useRef<null | string | undefined>(null);

  const returnOnReady = useCallback(() => {
    try {
      const currentRouteName = navigationRef.getCurrentRoute()?.name ?? null;
      routeNameRef.current = currentRouteName;
    } catch (error) {
      logErrorToCrashlytics(error);
    }
  }, [navigationRef]);

  const returnOnStateChange = useCallback(async () => {
    try {
      const previousRouteName = routeNameRef.current;
      const currentRouteName = navigationRef.getCurrentRoute()?.name ?? null;

      if (previousRouteName !== currentRouteName) {
        const screenName = currentRouteName ?? 'Unknown';
        await logAnalyticsScreenView(screenName);
      }
      routeNameRef.current = currentRouteName;
    } catch (error) {
      logErrorToCrashlytics(error);
    }
  }, [navigationRef]);

  return (
    <Navigation ref={navigationRef} onReady={returnOnReady} onStateChange={returnOnStateChange} />
  );
};

export default React.memo(UnauthenticatedRoutes);
