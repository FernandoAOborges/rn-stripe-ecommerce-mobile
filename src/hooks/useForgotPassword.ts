import { useRef, useState } from 'react';

import { IReturnMessageProps } from '@/types/global';

import type { TForgotPasswordFormValuesProps } from '../components/organisms/ForgotPasswordForm/validations';

const useForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const msgConfigRef = useRef<IReturnMessageProps>(null);

  const handleRecovery = async (credentials: TForgotPasswordFormValuesProps) => {
    try {
      console.log('credentials', credentials);

      msgConfigRef.current?.returnMessage({
        message: 'Login efetuado com sucesso',
        type: 'success',
      });

      // return await login(credentials).unwrap();
    } catch (err) {
      msgConfigRef.current?.returnMessage({ message: err.message, type: 'error' });
      // throw new Error(extractErrorMessage(err));
    }
  };

  return {
    handleRecovery,
    isLoading,
    msgConfigRef,
  };
};

export default useForgotPassword;
