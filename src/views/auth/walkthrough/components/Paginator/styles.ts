import styled from 'styled-components/native';

import { View, ViewAnimated as ViewAnimatedAtom } from '@/components/atoms';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ViewAnimated = styled(ViewAnimatedAtom)`
  height: 8px;
  width: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  background-color: ${({ theme }) => theme.colors.inactive};
  margin-right: ${({ theme }) => theme.spacing.xs}px;
`;
