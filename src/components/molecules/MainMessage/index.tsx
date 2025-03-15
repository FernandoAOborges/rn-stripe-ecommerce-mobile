import React, { memo, forwardRef, useImperativeHandle } from 'react';

import type { IReturnMessageProps } from '@/types/global';

import useMessage from './hooks/useMessage';
import { AnimatedView, Text } from './style';
import { TEST_ID } from './types';

const MainMessage = forwardRef<IReturnMessageProps>((_, ref) => {
  const { messageConfig, returnMessage, clearMessage } = useMessage();

  useImperativeHandle(
    ref,
    () => ({
      returnMessage,
      clearMessage,
    }),
    [returnMessage, clearMessage],
  );

  if (!messageConfig.message) return null;

  return (
    <AnimatedView testID={TEST_ID} type={messageConfig?.type}>
      <Text>{messageConfig.message}</Text>
    </AnimatedView>
  );
});

export default memo(MainMessage);
