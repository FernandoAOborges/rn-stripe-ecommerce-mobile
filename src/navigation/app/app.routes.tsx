import { createStaticNavigation, useNavigationContainerRef } from '@react-navigation/native';
import React, { memo } from 'react';

import { useNavigationTracker } from '@/hooks';

import BottomTab from './app.config';
import type { TAuthenticatedRoutesParamList } from './app.types';

const Navigation = createStaticNavigation(BottomTab);

const AuthenticatedRoutes = () => {
  const navigationRef = useNavigationContainerRef<TAuthenticatedRoutesParamList>();
  const { onReady, onStateChange } = useNavigationTracker(navigationRef);

  return <Navigation ref={navigationRef} onReady={onReady} onStateChange={onStateChange} />;
};

export default memo(AuthenticatedRoutes);
