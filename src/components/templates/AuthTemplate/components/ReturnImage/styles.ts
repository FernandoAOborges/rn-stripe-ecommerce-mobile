import { FadeIn, FadeOut } from 'react-native-reanimated';
import styled from 'styled-components/native';

import { Image as ImageAtom, ViewAnimatedReanimated } from '@/components/atoms';
import { Images } from '@/constants';

export const AnimatedView = styled(ViewAnimatedReanimated).attrs({
  entering: FadeIn,
  exiting: FadeOut,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.inactive};
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.lg}px 0;
  overflow: hidden;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.md}px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius['4xl']}px;
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.md}px;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius['4xl']}px;
`;

export const Image = styled(ImageAtom).attrs(({ source }) => ({
  resizeMode: 'cover',
  source: source || Images.LOGO,
}))`
  width: 100%;
  height: 100%;
`;
