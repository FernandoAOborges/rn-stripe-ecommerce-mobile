import * as yup from 'yup';
import i18n from 'i18next';
import { regexEmail } from '@/utils';

export interface IRegisterViewProps {
  email: string;
  password: string;
  confirmPassword: string;
}

export const registerInitialValues: IRegisterViewProps = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required(i18n.t('REGISTER.ERROR.EMAIL_REQUIRED'))
    .matches(regexEmail, i18n.t('REGISTER.ERROR.EMAIL_INVALID')),
  password: yup
    .string()
    .required(i18n.t('REGISTER.ERROR.PASSWORD_REQUIRED'))
    .min(6, i18n.t('REGISTER.ERROR.PASSWORD_MIN')),
  confirmPassword: yup
    .string()
    .required(i18n.t('REGISTER.ERROR.CONFIRM_PASSWORD_REQUIRED'))
    .oneOf([yup.ref('password')], i18n.t('REGISTER.ERROR.CONFIRM_PASSWORD_EQUAL'))
    .min(6, i18n.t('REGISTER.ERROR.CONFIRM_PASSWORD_MIN')),
});
