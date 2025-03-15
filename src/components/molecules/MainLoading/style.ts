import styled from 'styled-components/native';

import { View, Spinner, Text } from '@/components/atoms';

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ActivityIndicator = styled(Spinner).attrs(({ theme }) => ({
  size: 'large',
  color: theme.colors.black,
}))``;

export const Title = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-family: ${({ theme }) => theme.fonts.black};
`;
