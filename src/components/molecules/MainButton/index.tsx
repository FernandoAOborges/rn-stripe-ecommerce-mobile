import React, { memo, useCallback } from 'react';
import { GestureResponderEvent, Keyboard } from 'react-native';

import { ButtonText, ButtonContainer, ActivityIndicator } from './styles';
import { DEFAULT_CONFIG, TEST_ID_ACTIVITY_INDICATOR, TEST_ID_BUTTON } from './types';
import type { IMainButtonProps } from './types';

const MainButton = ({
  title,
  titleLoading = DEFAULT_CONFIG.titleLoading,
  isLoading = DEFAULT_CONFIG.isLoading,
  iconLeft,
  onPress,
  ...props
}: IMainButtonProps) => {
  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      onPress?.(event);
      Keyboard.dismiss();
    },
    [onPress],
  );

  return (
    <ButtonContainer
      {...props}
      testID={TEST_ID_BUTTON}
      onPress={handlePress}
      disabled={isLoading}
      isLoading={isLoading}
    >
      {iconLeft && iconLeft}
      <ButtonText isLoading={isLoading}>{isLoading ? titleLoading : title}</ButtonText>
      {isLoading && <ActivityIndicator testID={TEST_ID_ACTIVITY_INDICATOR} />}
    </ButtonContainer>
  );
};

export default memo(MainButton);
