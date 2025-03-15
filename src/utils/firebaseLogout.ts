import { getApp } from '@react-native-firebase/app';
import { getAuth } from '@react-native-firebase/auth';

import { logErrorToCrashlytics } from '@/services/monitoring/crashlytics';

const firebaseLogout = async () => {
  try {
    const app = getApp();
    const auth = getAuth(app);

    await auth.signOut();
  } catch (error) {
    logErrorToCrashlytics(error, 'firebaseLogout');
  }
};

export default firebaseLogout;
