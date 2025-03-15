/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';

import type { TInputProps } from './types';

export const BaseInput = styled.TextInput.attrs<TInputProps>(({ theme }) => ({
  placeholderTextColor: theme.colors.onBackground,
  selectionColor: theme.colors.onBackground,
}))<TInputProps>`
  color: ${({ theme }) => theme.colors.onBackground};
`;
