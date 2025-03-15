import React, { memo } from 'react';

import { BaseButton } from './styles';
import { TEST_ID } from './types';
import type { IButtonProps } from './types';

const Button = ({ children, ...props }: IButtonProps) => (
  <BaseButton testID={TEST_ID} {...props}>
    {children}
  </BaseButton>
);

export default memo(Button);
