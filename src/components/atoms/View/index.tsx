import React, { memo } from 'react';

import { BaseView } from './styles';
import type { IViewProps } from './types';
import { TEST_ID } from './types';

const View = ({ children, ...props }: IViewProps) => (
  <BaseView testID={TEST_ID} {...props}>
    {children}
  </BaseView>
);

export default memo(View);
