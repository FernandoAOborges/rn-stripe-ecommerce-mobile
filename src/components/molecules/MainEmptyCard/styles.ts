import styled from 'styled-components/native';

import { View, Image as AtomImage, Text as AtomText } from '@/components/atoms';
import { Images } from '@/constants';
import { dimensions } from '@/utils';

import MainButton from '../MainButton';

export const Container = styled(View)`
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs}px;
  padding: ${({ theme }) => theme.spacing.lg}px;
  background-color: ${({ theme }) => theme.colors.background};
  width: 90%;
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
`;

export const Image = styled(AtomImage).attrs({
  source: Images.LOGO,
  resizeMode: 'contain',
  alt: 'logo menu',
})`
  width: ${dimensions.WIDTH * 0.4}px;
  height: ${dimensions.WIDTH * 0.2}px;
  align-self: center;
`;

export const Title = styled(AtomText)`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  color: ${({ theme }) => theme.colors.onBackground};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;

export const SubTitle = styled(AtomText)`
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  color: ${({ theme }) => theme.colors.error};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;

export const Button = styled(MainButton)``;
