import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Text, Title } from './styles';

interface IButtonGoBackProps {
  translation: (key: string) => string;
}

const ButtonGoBack = ({ translation }: IButtonGoBackProps) => {
  const navigation = useNavigation();

  const handleNavigate = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container onPress={handleNavigate}>
      <Text>
        {translation('REGISTER.LOGIN')}
        <Title>{translation('REGISTER.LOGIN_BOLD')}</Title>
      </Text>
    </Container>
  );
};

export default memo(ButtonGoBack);
