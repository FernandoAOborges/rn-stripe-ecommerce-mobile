/* eslint-disable object-curly-newline */
import {
  getCrashlytics,
  log,
  recordError,
  setCrashlyticsCollectionEnabled,
  setUserId,
  setAttributes,
} from '@react-native-firebase/crashlytics';

import { APP_VERSION } from '@/config';

import { loggerError } from './logger';

type ErrorLike = Error | unknown;
type LogContext = string;

const crashlyticsInstance = getCrashlytics();

export const setupCrashlytics = async () => {
  if (!__DEV__) {
    try {
      await setCrashlyticsCollectionEnabled(crashlyticsInstance, true);
    } catch (error) {
      loggerError('Crashlytics initialization failed:', error);
    }
  }
};

export const logErrorToCrashlytics = (error: ErrorLike, context?: LogContext) => {
  try {
    const normalizedError = error instanceof Error ? error : new Error(String(error));

    if (context) {
      const message = [
        `[${context}] ${normalizedError.message}`,
        normalizedError.stack && `Stack: ${normalizedError.stack}`,
      ]
        .filter(Boolean)
        .join('\n');

      log(crashlyticsInstance, message);
    }

    recordError(crashlyticsInstance, normalizedError);
  } catch (err) {
    const fallbackError = err instanceof Error ? err : new Error(String(err));
    loggerError('Crashlytics error logging failed:', fallbackError);
  }
};

export const logMessageToCrashlytics = (message: string, context?: LogContext) => {
  try {
    const fullMessage = context ? `[${context}] ${message}` : message;
    log(crashlyticsInstance, fullMessage);
  } catch (err) {
    loggerError('Crashlytics log failed:', err);
  }
};

export const setCrashlyticsUserContext = async (userEmail: string) => {
  try {
    await Promise.all([
      setUserId(crashlyticsInstance, userEmail),
      setAttributes(crashlyticsInstance, {
        user_email: userEmail,
        app_version: APP_VERSION,
        platform: 'mobile',
      }),
    ]);
  } catch (err) {
    loggerError('Crashlytics user context error:', err);
  }
};
