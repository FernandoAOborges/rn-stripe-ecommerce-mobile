import styled from 'styled-components/native';

import { View } from '@/components/atoms';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled(View)`
  margin: ${({ theme }) => theme.spacing.md}px;
`;
