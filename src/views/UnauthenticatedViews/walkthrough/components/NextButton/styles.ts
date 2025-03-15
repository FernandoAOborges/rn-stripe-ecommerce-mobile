import styled from 'styled-components/native';

import { Button as ButtonAtom, Icon } from '@/components/atoms';

export const Button = styled(ButtonAtom).attrs({
  activeOpacity: 0.8,
})`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.onBackground};
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  align-items: center;
  justify-content: center;
`;

export const NextIcon = styled(Icon).attrs({
  family: 'MaterialIcons',
  name: 'skip-next',
  size: 30,
})`
  color: ${({ theme }) => theme.colors.background};
`;
