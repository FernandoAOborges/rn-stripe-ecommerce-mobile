import { useRef, useState } from 'react';

import signIn from '@/services/auth/login';
import { IReturnMessageProps } from '@/types/global';

import type { TLoginFormValuesProps } from '../components/organisms/LoginForm/validations';

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const msgConfigRef = useRef<IReturnMessageProps>(null);

  const handleLogin = async (credentials: TLoginFormValuesProps) => {
    try {
      msgConfigRef.current?.clearMessage();

      const { email, password } = credentials;
      setIsLoading(true);
      await signIn(email, password);
    } catch (err) {
      msgConfigRef.current?.returnMessage({ message: err.message, type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleLogin,
    isLoading,
    msgConfigRef,
  };
};

export default useLogin;
