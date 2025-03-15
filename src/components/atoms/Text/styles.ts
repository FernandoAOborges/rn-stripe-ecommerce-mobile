/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';

import type { ITextProps } from './types';
import { DEFAULT_CONFIG } from './types';

export const BaseText = styled.Text.attrs<ITextProps>({
  allowFontScaling: DEFAULT_CONFIG.allowFontScaling,
})``;
