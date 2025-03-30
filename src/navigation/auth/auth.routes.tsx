import { createStaticNavigation, useNavigationContainerRef } from '@react-navigation/native';
import React from 'react';

import { useNavigationTracker } from '@/hooks';

import RootStack from './auth.config';
import type { TUnauthenticatedRoutesParamList } from './auth.types';

const Navigation = createStaticNavigation(RootStack);

const UnauthenticatedRoutes = () => {
  const navigationRef = useNavigationContainerRef<TUnauthenticatedRoutesParamList>();
  const { onReady, onStateChange } = useNavigationTracker(navigationRef);

  return <Navigation ref={navigationRef} onReady={onReady} onStateChange={onStateChange} />;
};

export default React.memo(UnauthenticatedRoutes);
