import type { TouchableOpacityProps } from 'react-native';

export interface IButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export const TEST_ID = 'atom-button-default';

export const DEFAULT_CONFIG = {
  activeOpacity: 0.8,
  accessibilityRole: 'button',
};
