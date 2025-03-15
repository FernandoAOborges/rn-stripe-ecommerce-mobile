import { Image } from 'react-native';

import { Images } from '@/constants';

export const APP_VERSION = '0.1';

export const AVATAR_DEFAULT = Image.resolveAssetSource(Images.AVATAR).uri;

export const LOGO_URI = Image.resolveAssetSource(Images.LOGO).uri;

export const USERS_COLLECTION = 'users';

export const INITIAL_ROUTENAME_UNAUTHENTICATED = 'Walkthrough';

export const INITIAL_CRASHLYTICS_TEXT = 'App mounted.';

export const FIREBASE_EMULATOR_CONFIG = {
  enabled: __DEV__,
  host: '192.168.1.2',
  ports: {
    firestore: 8080,
    auth: 9099,
    functions: 5001,
  },
};
