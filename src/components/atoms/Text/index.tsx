import React, { memo } from 'react';

import { BaseText } from './styles';
import type { ITextProps } from './types';

const Text = ({ children, ...props }: ITextProps) => <BaseText {...props}>{children}</BaseText>;

export default memo(Text);
