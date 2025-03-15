import { zodResolver } from '@hookform/resolvers/zod';
import i18n from 'i18next';
import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, i18n.t('LOGIN.ERRORS.EMAIL_REQUIRED'))
    .email(i18n.t('LOGIN.ERRORS.EMAIL_INVALID')),
  password: z
    .string()
    .min(1, i18n.t('LOGIN.ERRORS.PASSWORD_REQUIRED'))
    .min(6, i18n.t('LOGIN.ERRORS.PASSWORD_MIN')),
});

export type TLoginFormValuesProps = z.infer<typeof loginSchema>;

export const loginFormConfig = {
  defaultValues: {
    email: '',
    password: '',
  },
  resolver: zodResolver(loginSchema),
};
