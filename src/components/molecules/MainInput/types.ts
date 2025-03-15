import type { TextInputProps } from 'react-native';

export interface IMainInputProps extends TextInputProps {
  label?: string;
  isOutlined?: boolean;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  errors?: Record<string, string>;
  error?: string;
}

export type TTypeWrapperInputIconProps = {
  error?: boolean | '';
  isOutlined?: boolean;
};

export const TEST_ID_INPUT = 'input';
export const TEST_ID_ICON_CLOSE = 'icon-close';
export const TEST_ID_ICON_LEFT = 'icon-left';
export const TEST_ID_ICON_RIGHT = 'icon-right';
export const TEST_ID_WRAPPER_INPUT_ICON = 'wrapper-input-icon';
