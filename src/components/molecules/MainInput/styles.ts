import styled from 'styled-components/native';

import { Text, View, Input as InputAtom, Icon } from '@/components/atoms';

import type { TTypeWrapperInputIconProps } from './types';

export const Container = styled(View)``;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.onBackground};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
`;

export const WrapperInputIcon = styled(View)<TTypeWrapperInputIconProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  gap: ${({ theme }) => theme.spacing.xs}px;
  padding-left: ${({ theme }) => theme.spacing.xs}px;
  padding-right: ${({ theme }) => theme.spacing.xs}px;

  ${({ isOutlined, error, theme }) =>
    isOutlined
      ? `
      border: 1px solid ${error ? theme.colors.error : theme.colors.border};
      `
      : `
        border-bottom-width: 1px;
        border-bottom-color: ${error ? theme.colors.error : theme.colors.border};
      `}
`;

export const Input = styled(InputAtom)`
  flex: 1;
`;

export const IconClose = styled(Icon).attrs(({ theme }) => ({
  family: 'MaterialIcons',
  name: 'close',
  size: theme.fontSizes.xl,
}))`
  color: ${({ theme }) => theme.colors.error};
`;

export const TextError = styled(Text)`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  margin-left: ${({ theme }) => theme.spacing.xs}px;
`;

export const WrapperIcon = styled(View)``;
