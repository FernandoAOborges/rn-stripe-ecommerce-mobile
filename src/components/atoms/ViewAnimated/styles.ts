/* eslint-disable import/prefer-default-export */
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import View from '../View';

import type { IViewAnimatedProps } from './types';

const BaseViewAnimted = styled(View)<IViewAnimatedProps>``;

export const AnimatedView = Animated.createAnimatedComponent(
  BaseViewAnimted,
) as React.ComponentType<
  IViewAnimatedProps & Animated.AnimatedProps<React.ComponentProps<typeof View>>
>;
