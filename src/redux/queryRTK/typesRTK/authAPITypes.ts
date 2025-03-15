export type { FirebaseFunctionsTypes } from '@react-native-firebase/functions';

export interface IRegisterRequestProps {
  email: string;
  password: string;
}

export interface IRegisterResponseProps {
  uid: string;
  email?: string;
}
