/* eslint-disable react/require-default-props */
import React, { memo, useCallback } from 'react';

import { Container, Image, SubTitle, Title, Button } from './styles';
import type { IEmptyListMessageProps } from './types';
import { DEFAULT_CONFIG } from './types';

const MainEmptyCard = ({
  title = DEFAULT_CONFIG.title,
  onPress,
  buttonTitle = DEFAULT_CONFIG.buttonTitle,
  subTitle = DEFAULT_CONFIG.subTitle,
  isLoading = false,
}: IEmptyListMessageProps) => {
  const handleOnPress = useCallback(() => {
    onPress?.();
  }, [onPress]);

  return (
    <Container>
      <Image />
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {onPress && <Button onPress={handleOnPress} title={buttonTitle} isLoading={isLoading} />}
    </Container>
  );
};

export default memo(MainEmptyCard);
