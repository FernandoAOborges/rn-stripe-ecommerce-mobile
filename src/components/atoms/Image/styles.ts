/* eslint-disable import/prefer-default-export */
import MaterialIcons from '@react-native-vector-icons/material-icons';
import styled from 'styled-components/native';

import type { TImageProps } from './types';
import { DEFAULT_CONFIG } from './types';

export const BaseImage = styled.Image.attrs<TImageProps>({
  accessibilityRole: DEFAULT_CONFIG.accessibilityRole,
})``;

export const BaseIcon = styled(MaterialIcons).attrs({});
