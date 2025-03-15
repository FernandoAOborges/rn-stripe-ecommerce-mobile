import styled from 'styled-components/native';
import { MainText } from '@/components';

export const Container = styled.View``;

export const Text = styled(MainText)`
  font-family: ${({ theme }) => theme.fonts.ROBOTO_BOLD};
  color: ${({ theme }) => theme.colors.onBackground};
  font-size: 36px;
`;
