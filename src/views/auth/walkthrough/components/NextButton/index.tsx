import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback } from 'react';

import { Button, NextIcon } from './styles';
import type { INextButtonProps } from './types';

const NextButton = ({ percentage, scrollTo }: INextButtonProps) => {
  const navigation = useNavigation();

  const handleNext = useCallback(() => {
    if (percentage === 100) {
      navigation.navigate('Login');
    } else {
      scrollTo(1);
    }
  }, [scrollTo, percentage, navigation]);

  return (
    <Button onPress={handleNext}>
      <NextIcon />
    </Button>
  );
};

export default memo(NextButton);
