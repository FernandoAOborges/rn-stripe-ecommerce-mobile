import React, { memo } from 'react';

import { BaseImage } from './styles';
import type { TImageProps } from './types';
import { TEST_ID } from './types';

const Image = ({ ...props }: TImageProps) => <BaseImage testID={TEST_ID} {...props} />;

export default memo(Image);
