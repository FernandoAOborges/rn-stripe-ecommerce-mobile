import type { TextProps } from 'react-native';

export interface ITextProps extends TextProps {
  children: React.ReactNode;
}

export const DEFAULT_CONFIG = {
  allowFontScaling: false,
};
