import styled from 'styled-components/native';

import { Icon } from '@/components/atoms';
import { MainButton, MainControlledInput, MainMessage } from '@/components/molecules';

export const Button = styled(MainButton)`
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;

export const Input = styled(MainControlledInput)``;

export const Message = styled(MainMessage)``;

export const IconEmail = styled(Icon).attrs(({ theme }) => ({
  family: 'MaterialIcons',
  name: 'mail',
  size: theme.fontSizes.md,
  color: theme.colors.onBackground,
}))``;

export const Iconlock = styled(Icon).attrs(({ theme }) => ({
  family: 'MaterialIcons',
  name: 'lock',
  size: theme.fontSizes.md,
  color: theme.colors.onBackground,
}))``;

interface IIConPasswordProps {
  showPassword: boolean;
}

export const IconPassword = styled(Icon).attrs<IIConPasswordProps>(({ theme, showPassword }) => ({
  family: 'MaterialIcons',
  name: showPassword ? 'visibility' : 'visibility-off',
  size: theme.fontSizes.md,
  color: theme.colors.onBackground,
}))``;
