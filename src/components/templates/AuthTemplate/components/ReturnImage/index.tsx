import React, { memo } from 'react';

import { AnimatedView, Image } from './styles';
import type { IReturnImageProps } from './types';

const ReturnImage = ({ image }: IReturnImageProps) => (
  <AnimatedView>
    <Image source={image} />
  </AnimatedView>
);

export default memo(ReturnImage);
