import type { TouchableOpacityProps } from 'react-native';

export type TButtonContainerProps = {
  isLoading: boolean | undefined;
};

export type TTextProps = {
  isLoading: boolean | undefined;
};

export interface IMainButtonProps extends TouchableOpacityProps {
  title: string;
  titleLoading?: string;
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
}

export const DEFAULT_CONFIG = {
  titleLoading: 'loading',
  isLoading: false,
};

export const TEST_ID_BUTTON = 'molecule-mainButton';
export const TEST_ID_ACTIVITY_INDICATOR = 'activityIndicator';
