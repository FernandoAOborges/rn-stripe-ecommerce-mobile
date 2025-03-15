import React, { memo } from 'react';
import { StatusBar } from 'react-native';

import { Container } from './styles';
import type { TStatusBarProps } from './types';
import { TEST_ID } from './types';

const CustomStatusBar = ({ barStyle, backgroundColor }: TStatusBarProps) => (
  <Container testID={TEST_ID}>
    <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
  </Container>
);
export default memo(CustomStatusBar);
