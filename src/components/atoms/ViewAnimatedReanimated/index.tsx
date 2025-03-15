import React, { memo } from 'react';

import { AnimatedView } from './styles';
import type { IViewAnimatedReanimatedProps } from './types';
import { TEST_ID } from './types';

const ViewAnimatedReanimated = ({ children, ...props }: IViewAnimatedReanimatedProps) => (
  <AnimatedView testID={TEST_ID} {...props}>
    {children}
  </AnimatedView>
);

export default memo(ViewAnimatedReanimated);
