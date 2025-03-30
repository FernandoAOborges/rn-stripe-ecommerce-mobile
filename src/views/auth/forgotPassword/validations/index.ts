import * as yup from 'yup';
import i18n from 'i18next';
import { regexEmail } from '@/utils';

export interface IForgotPasswordViewProps {
  email: string;
}

export const forgotPasswordInitialValues: IForgotPasswordViewProps = {
  email: '',
};

export const forgotPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required(i18n.t('LOGIN.ERRORS.EMAIL_REQUIRED'))
    .matches(regexEmail, i18n.t('LOGIN.ERRORS.EMAIL_INVALID')),
});
