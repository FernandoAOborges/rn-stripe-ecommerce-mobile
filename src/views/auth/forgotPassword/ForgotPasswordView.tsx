import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { ForgotPasswordForm } from '@/components/organisms';
import { AuthTemplate } from '@/components/templates';
import { Images } from '@/constants';
import { useForgotPassword } from '@/hooks';

import { Container } from './styles';

const ForgotPasswordView = () => {
  const navigation = useNavigation();
  const { handleRecovery, isLoading, msgConfigRef } = useForgotPassword();

  const handleNavigate = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <AuthTemplate
      title="FORGOT_PASSWORD.TITLE"
      navTextInactive="FORGOT_PASSWORD.LOGIN"
      navTextBold="FORGOT_PASSWORD.LOGIN_BOLD"
      handleNavigate={handleNavigate}
      image={Images.BG_FORGOT_PASSWORD}
    >
      <Container>
        <ForgotPasswordForm
          isLoading={isLoading}
          onSubmit={handleRecovery}
          msgConfigRef={msgConfigRef}
        />
      </Container>
    </AuthTemplate>
  );
};

export default ForgotPasswordView;
