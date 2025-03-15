import type { IReturnMessageProps } from '@/types/global';

import type { TForgotPasswordFormValuesProps } from './validations';

export type { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';

export type TForgotPasswordFormProps = {
  onSubmit: (data: TForgotPasswordFormValuesProps) => void;
  isLoading: boolean;
  msgConfigRef: React.RefObject<IReturnMessageProps | null>;
};
