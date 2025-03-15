import { getFunctions, httpsCallable } from '@react-native-firebase/functions';
import type { FirebaseFunctionsTypes } from '@react-native-firebase/functions';

const functionsInstance = getFunctions();

class FirebaseFunctionError extends Error {
  code: string;

  details?: unknown;

  constructor(code: string, message: string, details?: unknown) {
    super(message);
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, FirebaseFunctionError.prototype);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function callFirebaseFunction<T>(functionName: string, params?: any): Promise<T> {
  try {
    const callableFunction = httpsCallable(functionsInstance, functionName);
    const response = await callableFunction(params);
    return response.data as T;
  } catch (error) {
    const firebaseError = error as FirebaseFunctionsTypes.HttpsError;

    throw new FirebaseFunctionError(
      firebaseError.code || 'unknown',
      firebaseError.message || 'An error occurred while calling Firebase function.',
      firebaseError.details,
    );
  }
}

export default callFirebaseFunction;
