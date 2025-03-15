import { getApp } from '@react-native-firebase/app';
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';

const signIn = async (email: string, password: string) => {
  try {
    const app = getApp();
    const auth = getAuth(app);

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(
      (error as { message?: string }).message || 'An error occurred while signing in.',
    );
  }
};

export default signIn;
