import { IconProps } from '@react-native-vector-icons/common';
import fontawesome6 from '@react-native-vector-icons/fontawesome6';
import MaterialIcons from '@react-native-vector-icons/material-icons';

export const iconComponents = {
  MaterialIcons,
  fontawesome6,
};

export type TIconFamilyProps = keyof typeof iconComponents;

export type TIconNameProps<T extends TIconFamilyProps> = React.ComponentProps<
  (typeof iconComponents)[T]
>['name'];

export interface IIconProps<T extends TIconFamilyProps> extends IconProps<TIconNameProps<T>> {
  family: T;
  testID?: string;
}

export const TEST_ID = 'atom-icon-default';
export const ERROR_MESSAGE = 'Invalid family provided:';
