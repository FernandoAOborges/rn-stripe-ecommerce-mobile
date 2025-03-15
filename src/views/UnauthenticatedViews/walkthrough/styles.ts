import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import { View } from '@/components/atoms';

import type { IWelcomeContents } from './types';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledFlatList = styled(FlatList<IWelcomeContents>).attrs({
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
  scrollEventThrottle: 16,
})``;

export const WrapperButtonAndPaginator = styled(View)`
  margin: ${({ theme }) => theme.spacing.xl}px;
  gap: ${({ theme }) => theme.spacing.md}px;
`;
