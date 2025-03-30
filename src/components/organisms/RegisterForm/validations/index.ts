import { zodResolver } from '@hookform/resolvers/zod';
import i18n from 'i18next';
import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z
      .string()
      .min(1, i18n.t('REGISTER.ERROR.EMAIL_REQUIRED'))
      .email(i18n.t('REGISTER.ERROR.EMAIL_INVALID')),
    password: z
      .string()
      .min(1, i18n.t('REGISTER.ERROR.PASSWORD_REQUIRED'))
      .min(6, i18n.t('REGISTER.ERROR.PASSWORD_MIN')),
    confirmPassword: z
      .string()
      .min(1, i18n.t('REGISTER.ERROR.CONFIRM_PASSWORD_REQUIRED'))
      .min(6, i18n.t('REGISTER.ERROR.CONFIRM_PASSWORD_MIN')),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: i18n.t('REGISTER.ERROR.CONFIRM_PASSWORD_EQUAL'),
    path: ['confirmPassword'],
  });

export type TRegisterFormValuesProps = z.infer<typeof registerSchema>;

export const registerFormConfig = {
  defaultValues: {
    email: '',
    password: '',
    confirmPassword: '',
  },
  resolver: zodResolver(registerSchema),
};
