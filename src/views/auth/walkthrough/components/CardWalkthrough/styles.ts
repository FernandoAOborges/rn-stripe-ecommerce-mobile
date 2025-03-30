import styled from 'styled-components/native';

import { View, Image as ImageAtom, Text } from '@/components/atoms';
import { applyShadow, dimensions } from '@/utils';

export const Container = styled(View)`
  width: ${dimensions.WIDTH}px;
  height: ${dimensions.HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl}px;
  gap: ${({ theme }) => theme.spacing.xl}px;
`;

export const WrapperImage = styled(View).attrs(({ theme }) => ({
  ...applyShadow(theme),
}))`
  flex: 0.5;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.full}px;
`;

export const Image = styled(ImageAtom).attrs({
  resizeMode: 'cover',
})`
  width: ${dimensions.WIDTH}px;
  height: ${dimensions.HEIGHT / 2}px;
`;

export const Title = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.onBackground};
`;

export const Subtitle = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.onBackground};
`;

export const Content = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-family: ${({ theme }) => theme.fonts.blackItalic};
  color: ${({ theme }) => theme.colors.onBackground};
  margin-top: ${({ theme }) => theme.spacing.md}px;
  letter-spacing: 0.5px;
  line-height: ${({ theme }) => theme.fontSizes.lg}px;
`;
