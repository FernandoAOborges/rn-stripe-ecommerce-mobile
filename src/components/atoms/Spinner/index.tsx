import React, { memo } from 'react';

import { BaseActivityIndicator } from './styles';
import type { TSpinnerProps } from './types';
import { TEST_ID } from './types';

const Spinner = ({ ...props }: TSpinnerProps) => (
  <BaseActivityIndicator testID={TEST_ID} {...props} />
);

export default memo(Spinner);
