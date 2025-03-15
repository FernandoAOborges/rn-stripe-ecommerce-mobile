// import { getApp } from '@react-native-firebase/app';
// import { getAuth } from '@react-native-firebase/auth';
// import { getFirestore } from '@react-native-firebase/firestore';

// import { FIREBASE_EMULATOR_CONFIG } from '@/config';

// const configureEmulators = () => {
//   if (FIREBASE_EMULATOR_CONFIG.enabled) {
//     const { host, ports } = FIREBASE_EMULATOR_CONFIG;

//     firestore().useEmulator(host, ports.firestore);
//     auth().useEmulator(`http://${host}:${ports.auth}`);
//     firebase.app().functions().useEmulator(host, ports.functions);
//   }
// };

// export default configureEmulators;

import { getApp } from '@react-native-firebase/app';
import { getAuth, connectAuthEmulator } from '@react-native-firebase/auth';
import { getFirestore, connectFirestoreEmulator } from '@react-native-firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from '@react-native-firebase/functions';

import { FIREBASE_EMULATOR_CONFIG } from '@/config';

const configureEmulators = () => {
  if (FIREBASE_EMULATOR_CONFIG.enabled) {
    const { host, ports } = FIREBASE_EMULATOR_CONFIG;
    const app = getApp();

    const firestore = getFirestore(app);
    connectFirestoreEmulator(firestore, host, ports.firestore);

    const auth = getAuth(app);
    connectAuthEmulator(auth, `http://${host}:${ports.auth}`);

    const functions = getFunctions(app);
    connectFunctionsEmulator(functions, host, ports.functions);
  }
};

export default configureEmulators;
