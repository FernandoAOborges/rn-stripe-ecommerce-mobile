import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback } from 'react';

import { Container, Text } from './styles';
import type { IForgotPasswordProps } from './types';

const ForgotPassword = ({ translation }: IForgotPasswordProps) => {
  const navigation = useNavigation();

  const handleNavigate = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, [navigation]);

  return (
    <Container onPress={handleNavigate}>
      <Text>{translation('LOGIN.FORGOT')}</Text>
    </Container>
  );
};

export default memo(ForgotPassword);
