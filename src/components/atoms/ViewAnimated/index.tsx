import React, { memo } from 'react';

import { AnimatedView } from './styles';
import type { IViewAnimatedProps } from './types';
import { TEST_ID } from './types';

const ViewAnimated = ({ children, ...props }: IViewAnimatedProps) => (
  <AnimatedView testID={TEST_ID} {...props}>
    {children}
  </AnimatedView>
);

export default memo(ViewAnimated);
