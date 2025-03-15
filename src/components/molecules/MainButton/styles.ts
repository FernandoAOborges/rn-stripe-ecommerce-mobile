import styled from 'styled-components/native';

import { Button, Spinner, Text } from '../../atoms';

import type { TButtonContainerProps, TTextProps } from './types';

export const ButtonContainer = styled(Button)<TButtonContainerProps>`
  align-items: center;
  justify-content: center;
  background-color: ${({ isLoading, theme }) =>
    isLoading ? theme.colors.inactive : theme.colors.onBackground};
  padding: ${({ theme }) => theme.spacing.md}px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const ButtonText = styled(Text)<TTextProps>`
  color: ${({ isLoading, theme }) => (isLoading ? theme.colors.primary : theme.colors.background)};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`;

export const ActivityIndicator = styled(Spinner).attrs(({ theme }) => ({
  color: theme.colors.background,
  size: 'small',
}))`
  margin-left: ${({ theme }) => theme.spacing.md}px;
`;
