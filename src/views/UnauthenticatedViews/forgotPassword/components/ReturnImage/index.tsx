import React, { memo } from 'react';
import { Images } from '@/constants';
import { AnimatedView, Image } from './style';

const ReturnImage = () => (
  <AnimatedView>
    <Image source={Images.BG_FORGOT_PASSWORD} />
  </AnimatedView>
);

export default memo(ReturnImage);
