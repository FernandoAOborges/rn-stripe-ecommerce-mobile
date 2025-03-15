import React, { memo, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { StatusBar } from '@/components/atoms';
import { useAppSelector, useInitialConfig } from '@/hooks';
import { themeSelector } from '@/redux/slices/ThemeSlice';
import { logAnalyticsScreenView, logAnalyticsEvent } from '@/services/monitoring/analytics';
import { logMessageToCrashlytics, setupCrashlytics } from '@/services/monitoring/crashlytics';
import { loggerError } from '@/services/monitoring/logger';
import { darkTheme, lightTheme } from '@/theme';
import { EThemeProps } from '@/types/global';

import AuthenticatedRoutes from './AuthenticatedRoutes';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const CONFIG_MSG = {
  logMessageToCrashlytics: {
    message: 'App mounted',
    context: 'AppLifecycle',
  },
  logEvent: {
    name: 'app_start',
    params: { source: 'cold_start' },
  },
  logScreenView: 'App',
};

const WrapperRoutes = () => {
  const theme = useAppSelector(themeSelector);
  const { isAuthenticated } = useInitialConfig();

  useEffect(() => {
    const initApp = async () => {
      try {
        await setupCrashlytics();

        await Promise.all([
          logAnalyticsScreenView(CONFIG_MSG.logScreenView),
          logAnalyticsEvent({
            name: CONFIG_MSG.logEvent.name,
            params: { source: CONFIG_MSG.logEvent.params.source },
          }),
        ]);

        logMessageToCrashlytics(
          CONFIG_MSG.logMessageToCrashlytics.message,
          CONFIG_MSG.logMessageToCrashlytics.context,
        );
      } catch (error) {
        loggerError('App initialization error:', error);
      }
    };

    initApp();
  }, []);

  return (
    // <StripeProvider publishableKey={TEST_MODE_PUBLISHABLE_KEY}>
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={theme === EThemeProps.light ? 'dark-content' : 'light-content'}
        backgroundColor={
          theme === EThemeProps.light
            ? themes.light.colors.background
            : themes.dark.colors.background
        }
      />
      <ThemeProvider theme={themes[theme]}>
        {isAuthenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
      </ThemeProvider>
    </SafeAreaView>
    // </StripeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(WrapperRoutes);
