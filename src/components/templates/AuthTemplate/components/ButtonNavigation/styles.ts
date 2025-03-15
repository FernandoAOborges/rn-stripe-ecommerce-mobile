import styled from 'styled-components/native';

import { Button, Text as TextAtom } from '@/components/atoms';

export const Container = styled(Button)`
  padding: ${({ theme }) => theme.spacing.md}px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(TextAtom)`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.inactive};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
`;

export const Title = styled(TextAtom)`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.onBackground};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
`;
