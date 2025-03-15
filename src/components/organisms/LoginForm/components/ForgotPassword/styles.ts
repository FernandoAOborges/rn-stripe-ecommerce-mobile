import styled from 'styled-components/native';

import { Button, Text as TextAtom } from '@/components/atoms';

export const Container = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const Text = styled(TextAtom)`
  font-family: ${({ theme }) => theme.fonts.black};
  color: ${({ theme }) => theme.colors.inactive};
  text-align: right;
`;
