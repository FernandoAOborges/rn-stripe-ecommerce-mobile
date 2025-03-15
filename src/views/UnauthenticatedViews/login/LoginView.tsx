import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { LoginForm } from '@/components/organisms';
import { AuthTemplate } from '@/components/templates';
import { Images } from '@/constants';
import { useLogin } from '@/hooks';

const LoginView = () => {
  const { handleLogin, isLoading, msgConfigRef } = useLogin();

  const navigation = useNavigation();

  const handleNavigate = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  return (
    <AuthTemplate
      title="LOGIN.TITLE"
      navTextInactive="LOGIN.REGISTER"
      navTextBold="LOGIN.REGISTER_BOLD"
      handleNavigate={handleNavigate}
      image={Images.BG_LOGIN}
    >
      <LoginForm isLoading={isLoading} onSubmit={handleLogin} msgConfigRef={msgConfigRef} />
    </AuthTemplate>
  );
};

export default LoginView;
