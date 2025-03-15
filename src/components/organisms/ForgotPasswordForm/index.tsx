import React, { memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Input, Message, IconEmail } from './styles';
import type { TForgotPasswordFormProps, KeyboardTypeOptions, ReturnKeyTypeOptions } from './types';
import type { TForgotPasswordFormValuesProps } from './validations';
import { forgotPasswordFormConfig } from './validations';

const ForgotPasswordForm = ({ onSubmit, isLoading, msgConfigRef }: TForgotPasswordFormProps) => {
  const formMethods = useForm<TForgotPasswordFormValuesProps>(forgotPasswordFormConfig);
  const { t } = useTranslation();

  return (
    <FormProvider {...formMethods}>
      <Input
        control={formMethods.control}
        name="email"
        label={t('FORGOT_PASSWORD.EMAIL')}
        placeholder={t('FORGOT_PASSWORD.EMAIL_PLACEHOLDER')}
        keyboardType={'email-address' as KeyboardTypeOptions}
        returnKeyType={'next' as ReturnKeyTypeOptions}
        onSubmitEditing={formMethods.handleSubmit(onSubmit)}
        iconLeft={<IconEmail />}
      />

      <Message ref={msgConfigRef} />
      <Button
        title={t('FORGOT_PASSWORD.SUBMIT')}
        isLoading={isLoading}
        onPress={formMethods.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
};

export default memo(ForgotPasswordForm);
