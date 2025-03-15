import React, { memo } from 'react';

import { BaseInput } from './styles';
import type { TInputProps } from './types';
import { TEST_ID } from './types';

const Input = ({ ...props }: TInputProps) => <BaseInput testID={TEST_ID} {...props} />;

export default memo(Input);
