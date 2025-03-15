/* eslint-disable object-curly-newline */
import type { IReturnMessageProps } from '@/types/global';

import type { TLoginFormValuesProps } from './validations';

export type { KeyboardTypeOptions, ReturnKeyTypeOptions, TextInput } from 'react-native';

export type TLoginFormProps = {
  onSubmit: (data: TLoginFormValuesProps) => void;
  isLoading: boolean;
  msgConfigRef: React.RefObject<IReturnMessageProps | null>;
};
