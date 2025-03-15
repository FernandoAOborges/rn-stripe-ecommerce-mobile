/* eslint-disable object-curly-newline */
import type { IReturnMessageProps } from '@/types/global';

import type { TRegisterFormValuesProps } from './validations';

export type { KeyboardTypeOptions, ReturnKeyTypeOptions, TextInput } from 'react-native';

export type TRegisterFormProps = {
  onSubmit: (data: TRegisterFormValuesProps) => void;
  isLoading: boolean;
  msgConfigRef: React.RefObject<IReturnMessageProps | null>;
};
