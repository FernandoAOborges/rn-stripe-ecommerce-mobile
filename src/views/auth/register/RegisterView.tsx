import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { RegisterForm } from '@/components/organisms';
import { AuthTemplate } from '@/components/templates';
import { Images } from '@/constants';
import { useRegister } from '@/hooks';

const RegisterView = () => {
  const navigation = useNavigation();
  const { handleRegister, isLoading, msgConfigRef } = useRegister();

  const handleNavigate = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <AuthTemplate
      title="REGISTER.TITLE"
      navTextInactive="REGISTER.LOGIN"
      navTextBold="REGISTER.LOGIN_BOLD"
      handleNavigate={handleNavigate}
      image={Images.BG_REGISTER}
    >
      <RegisterForm isLoading={isLoading} onSubmit={handleRegister} msgConfigRef={msgConfigRef} />
    </AuthTemplate>
  );
};

export default RegisterView;
