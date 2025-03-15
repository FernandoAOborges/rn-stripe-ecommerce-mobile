import { zodResolver } from '@hookform/resolvers/zod';
import i18n from 'i18next';
import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, i18n.t('FORGOT_PASSWORD.ERROR.EMAIL_REQUIRED'))
    .email(i18n.t('FORGOT_PASSWORD.ERROR.EMAIL_INVALID')),
});

export type TForgotPasswordFormValuesProps = z.infer<typeof forgotPasswordSchema>;

export const forgotPasswordFormConfig = {
  defaultValues: {
    email: '',
  },
  resolver: zodResolver(forgotPasswordSchema),
};
