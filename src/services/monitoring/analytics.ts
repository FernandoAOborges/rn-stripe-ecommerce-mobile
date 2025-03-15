/* eslint-disable object-curly-newline */
import {
  getAnalytics,
  logEvent,
  logScreenView,
  setUserProperties,
  setUserId,
} from '@react-native-firebase/analytics';
import { logErrorToCrashlytics } from './crashlytics';

const analytics = getAnalytics();

type AnalyticsEvent = {
  name: string;
  params?: Record<string, string | number | boolean | null>;
};

export const logAnalyticsScreenView = async (screenName: string) => {
  if (__DEV__) return;

  try {
    await logScreenView(analytics, {
      screen_name: screenName,
      screen_class: screenName,
    });
  } catch (error) {
    logErrorToCrashlytics(error, `logScreenView - ${screenName}`);
  }
};

export const logAnalyticsEvent = async ({ name, params }: AnalyticsEvent) => {
  if (__DEV__) return;

  try {
    await logEvent(analytics, name, params);
  } catch (error) {
    logErrorToCrashlytics(error, `logEvent - ${name}`);
  }
};

export const setAnalyticsUserProperties = async (userEmail: string, userId: string) => {
  if (__DEV__) return;

  try {
    await Promise.all([
      setUserId(analytics, userId),
      setUserProperties(analytics, {
        email: userEmail,
      }),
    ]);
  } catch (error) {
    logErrorToCrashlytics(error, `setAnalyticsUserProperties - ${userEmail} - ${userId}`);
  }
};
