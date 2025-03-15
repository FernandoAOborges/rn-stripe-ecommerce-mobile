import styled from 'styled-components/native';
import { MainText } from '@/components';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 20px 0;
  align-items: center;
  justify-content: center;
`;

export const Text = styled(MainText)`
  font-family: ${({ theme }) => theme.fonts.ROBOTO_BOLD};
  color: ${({ theme }) => theme.colors.inactive};
  font-size: 16px;
  
`;

export const Title = styled(MainText)`
  font-family: ${({ theme }) => theme.fonts.ROBOTO_BOLD};
  color: ${({ theme }) => theme.colors.onBackground};
  font-size: 16px;
  
`;
