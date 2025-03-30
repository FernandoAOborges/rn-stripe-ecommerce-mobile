import type { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { useCallback, useRef } from 'react';

import { logAnalyticsScreenView } from '@/services/monitoring/analytics';
import { logErrorToCrashlytics } from '@/services/monitoring/crashlytics';

function useNavigationTracker<ParamList extends Record<string, object | undefined>>(
  navigationRef: NavigationContainerRefWithCurrent<ParamList>,
) {
  const routeNameRef = useRef<null | string | undefined>(null);

  const onReady = useCallback(() => {
    try {
      const currentRouteName = navigationRef.current?.getCurrentRoute()?.name ?? null;
      routeNameRef.current = currentRouteName;
    } catch (error) {
      logErrorToCrashlytics(error);
    }
  }, [navigationRef]);

  const onStateChange = useCallback(async () => {
    try {
      const previousRouteName = routeNameRef.current;
      const currentRouteName = navigationRef.current?.getCurrentRoute()?.name ?? null;

      if (previousRouteName !== currentRouteName) {
        const screenName = currentRouteName ?? 'Unknown';
        await logAnalyticsScreenView(screenName);
      }

      routeNameRef.current = currentRouteName;
    } catch (error) {
      logErrorToCrashlytics(error);
    }
  }, [navigationRef]);

  return {
    onReady,
    onStateChange,
  };
}

export default useNavigationTracker;
