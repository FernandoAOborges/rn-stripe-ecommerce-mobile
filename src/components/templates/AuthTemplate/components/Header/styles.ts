import styled from 'styled-components/native';

import { Text, View } from '@/components/atoms';

export const Container = styled(View)``;

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.black};
  color: ${({ theme }) => theme.colors.onBackground};
  font-size: ${({ theme }) => theme.fontSizes.xxl}px;
`;
