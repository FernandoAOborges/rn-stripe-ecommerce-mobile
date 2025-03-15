import { FadeIn, FadeOut } from 'react-native-reanimated';
import styled from 'styled-components/native';

import { Text as TextAtom, ViewAnimatedReanimated } from '@/components/atoms';

import type { IAnimatedViewProps } from './types';

export const AnimatedView = styled(ViewAnimatedReanimated).attrs({
  entering: FadeIn,
  exiting: FadeOut,
})<IAnimatedViewProps>`
  background-color: ${({ type, theme }) =>
    type === 'error' ? theme.colors.error : theme.colors.success};
  padding: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.sm}px;
`;

export const Text = styled(TextAtom)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  text-align: center;
`;
