/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';

import type { IButtonProps } from './types';
import { DEFAULT_CONFIG } from './types';

export const BaseButton = styled.TouchableOpacity.attrs<IButtonProps>({
  activeOpacity: DEFAULT_CONFIG.activeOpacity,
  accessibilityRole: DEFAULT_CONFIG.accessibilityRole,
})``;
