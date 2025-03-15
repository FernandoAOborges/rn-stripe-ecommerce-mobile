import { useCallback, useRef } from 'react';

import { useRegisterUserMutation } from '@/redux/queryRTK/authAPI';
import signIn from '@/services/auth/login';
import { logErrorToCrashlytics } from '@/services/monitoring/crashlytics';
import { IReturnMessageProps } from '@/types/global';

import type { TRegisterFormValuesProps } from '../components/organisms/RegisterForm/validations';

const useRegister = () => {
  const msgConfigRef = useRef<IReturnMessageProps>(null);

  const [registerUser, { isLoading: isRegistering }] = useRegisterUserMutation();

  const handleRegister = useCallback(
    async (credentials: TRegisterFormValuesProps) => {
      try {
        msgConfigRef.current?.clearMessage();
        const { email, password } = credentials;

        await registerUser({ email, password }).unwrap();

        await signIn(email, password);
      } catch (err) {
        msgConfigRef.current?.returnMessage({ message: err.details || err.message, type: 'error' });
        logErrorToCrashlytics(err, 'handleRegister');
      }
    },
    [registerUser],
  );

  return {
    handleRegister,
    isLoading: isRegistering,
    msgConfigRef,
  };
};

export default useRegister;
