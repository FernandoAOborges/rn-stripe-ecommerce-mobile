import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Text, Title } from './styles';

interface IButtonGoBackProps {
  translation: (text: string) => string;
}

const ButtonGoBack = ({ translation }: IButtonGoBackProps) => {
  const navigation = useNavigation();

  const handleNavigate = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container onPress={handleNavigate}>
      <Text>
        {translation('FORGOT_PASSWORD.LOGIN')}{' '}
        <Title>{translation('FORGOT_PASSWORD.LOGIN_BOLD')}</Title>
      </Text>
    </Container>
  );
};

export default memo(ButtonGoBack);
