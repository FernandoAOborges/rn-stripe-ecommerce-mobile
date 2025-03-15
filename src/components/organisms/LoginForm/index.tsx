/* eslint-disable object-curly-newline */
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import ForgotPassword from './components/ForgotPassword';
import { Button, Input, Message, IconEmail, IconPassword, Iconlock } from './styles';
import type {
  TLoginFormProps,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInput,
} from './types';
import type { TLoginFormValuesProps } from './validations';
import { loginFormConfig } from './validations';

const LoginForm = ({ onSubmit, isLoading, msgConfigRef }: TLoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const refInputs = useRef([useRef<TextInput>(null), useRef<TextInput>(null)]);
  const formMethods = useForm<TLoginFormValuesProps>(loginFormConfig);
  const { t } = useTranslation();

  const handleShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  const CONFIG_INPUTS = useMemo(
    () => [
      {
        id: 1,
        label: t('LOGIN.EMAIL'),
        name: 'email',
        placeholder: t('LOGIN.EMAIL_PLACEHOLDER'),
        control: formMethods.control,
        accessibilityLabel: 'Email text input',
        keyboardType: 'email-address' as KeyboardTypeOptions,
        returnKeyType: 'next' as ReturnKeyTypeOptions,
        ref: refInputs.current[0],
        onSubmitEditing: () => refInputs.current[1].current?.focus(),
        secureTextEntry: false,
        iconLeft: <IconEmail />,
      },
      {
        id: 2,
        label: t('LOGIN.PASSWORD'),
        name: 'password',
        placeholder: t('LOGIN.PASSWORD_PLACEHOLDER'),
        control: formMethods.control,
        accessibilityLabel: 'Senha text input',
        keyboardType: 'default' as KeyboardTypeOptions,
        returnKeyType: 'go' as ReturnKeyTypeOptions,
        ref: refInputs.current[1],
        onSubmitEditing: formMethods.handleSubmit(onSubmit),
        secureTextEntry: !showPassword,
        iconLeft: <Iconlock />,
        // @ts-expect-error - ShowPassword Boolean
        iconRight: <IconPassword showPassword={showPassword} onPress={handleShowPassword} />,
      },
    ],
    [formMethods, showPassword, handleShowPassword, onSubmit, t],
  );

  return (
    <FormProvider {...formMethods}>
      {CONFIG_INPUTS.map((input) => (
        <Input
          key={input.id}
          // @ts-expect-error - REF
          ref={input.ref}
          control={input.control}
          name={input.name}
          label={input.label}
          placeholder={input.placeholder}
          keyboardType={input.keyboardType}
          returnKeyType={input.returnKeyType}
          onSubmitEditing={input.onSubmitEditing}
          secureTextEntry={input.secureTextEntry}
          iconLeft={input.iconLeft}
          iconRight={input.iconRight}
        />
      ))}

      <ForgotPassword translation={t} />

      <Message ref={msgConfigRef} />
      <Button
        title={t('LOGIN.LOGIN')}
        isLoading={isLoading}
        onPress={formMethods.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
};

export default memo(LoginForm);
