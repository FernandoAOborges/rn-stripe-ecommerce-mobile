import styled from 'styled-components/native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export const AnimatedView = styled(Animated.View).attrs({
  entering: FadeIn,
  exiting: FadeOut,
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.inactive};
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  overflow: hidden;
  border-radius: 10px 60px 10px 60px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;
