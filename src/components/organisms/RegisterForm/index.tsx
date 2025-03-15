/* eslint-disable object-curly-newline */
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, Input, Message, IconEmail, IconPassword, Iconlock } from './styles';
import type {
  TRegisterFormProps,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TextInput,
} from './types';
import type { TRegisterFormValuesProps } from './validations';
import { registerFormConfig } from './validations';

const RegisterForm = ({ onSubmit, isLoading, msgConfigRef }: TRegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const refInputs = useRef([
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ]);
  const formMethods = useForm<TRegisterFormValuesProps>(registerFormConfig);
  const { t } = useTranslation();

  const handleShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  const handleShowConfirmPassword = useCallback(() => {
    setShowConfirmPassword((prevState) => !prevState);
  }, []);

  const CONFIG_INPUTS = useMemo(
    () => [
      {
        id: 1,
        label: t('REGISTER.EMAIL'),
        name: 'email',
        placeholder: t('REGISTER.EMAIL_PLACEHOLDER'),
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
        label: t('REGISTER.PASSWORD'),
        name: 'password',
        placeholder: t('REGISTER.PASSWORD_PLACEHOLDER'),
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
      {
        id: 3,
        label: t('REGISTER.CONFIRM_PASSWORD'),
        name: 'confirmPassword',
        placeholder: t('REGISTER.CONFIRM_PASSWORD_PLACEHOLDER'),
        control: formMethods.control,
        accessibilityLabel: 'Confirmar senha text input',
        keyboardType: 'default' as KeyboardTypeOptions,
        returnKeyType: 'go' as ReturnKeyTypeOptions,
        ref: refInputs.current[2],
        onSubmitEditing: formMethods.handleSubmit(onSubmit),
        secureTextEntry: !showConfirmPassword,
        iconLeft: <Iconlock />,
        iconRight: (
          // @ts-expect-error - ShowPassword Boolean
          <IconPassword showPassword={showConfirmPassword} onPress={handleShowConfirmPassword} />
        ),
      },
    ],
    [
      formMethods,
      showPassword,
      handleShowPassword,
      onSubmit,
      t,
      showConfirmPassword,
      handleShowConfirmPassword,
    ],
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

      <Message ref={msgConfigRef} />
      <Button
        title={t('REGISTER.REGISTER')}
        isLoading={isLoading}
        onPress={formMethods.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
};

export default memo(RegisterForm);
