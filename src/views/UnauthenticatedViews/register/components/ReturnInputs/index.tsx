/* eslint-disable object-curly-newline */
import { KeyboardTypeOptions, ReturnKeyTypeOptions } from 'react-native';
import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { FormikErrors, FormikProps } from 'formik';
import {
  Container,
  IconClose,
  IconLock,
  IconPassword,
  IconEmail,
  TextInput,
  Title,
  WrapperInputIcon,
  CardInputs,
  TextError,
} from './style';
import { IRegisterViewProps } from '../../validations';

type TDataProps = {
  email: string;
  password: string;
  confirmPassword: string;
};

interface ReturnInputsProps {
  values: TDataProps;
  handleChange: FormikProps<IRegisterViewProps>['handleChange'];
  handleSubmit: () => void;
  errors: FormikErrors<TDataProps> | Record<string, string>;
  translation: (key: string) => string;
}

const ReturnInputs = ({ values, handleChange, handleSubmit, errors, translation }: ReturnInputsProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const refInputs = useRef([useRef(null), useRef(null), useRef(null)]);

  const CONFIG_INPUTS = useMemo(
    () => [
      {
        id: 1,
        label: translation('REGISTER.EMAIL'),
        placeholder: translation('REGISTER.EMAIL_PLACEHOLDER'),
        type: 'email',
        value: values?.email,
        onChangeText: handleChange('email'),
        error: 'email' in errors,
        accessibilityLabel: 'Enter email text',
        keyboardType: 'email-address' as KeyboardTypeOptions,
        ref: refInputs.current[0],
        // @ts-expect-error - Only works with TextInput
        onSubmitEditing: () => refInputs.current[1].current?.focus(),
        returnKeyType: 'next' as ReturnKeyTypeOptions,
        returnIcon: IconEmail,
      },
      {
        id: 2,
        label: translation('REGISTER.PASSWORD'),
        placeholder: translation('REGISTER.PASSWORD_PLACEHOLDER'),
        type: 'password',
        value: values?.password,
        onChangeText: handleChange('password'),
        error: 'password' in errors,
        accessibilityLabel: 'Enter password text',
        keyboardType: 'default' as KeyboardTypeOptions,
        ref: refInputs.current[1],
        // @ts-expect-error - Only works with TextInput
        onSubmitEditing: () => refInputs.current[2].current?.focus(),
        returnKeyType: 'go' as ReturnKeyTypeOptions,
        returnIcon: IconLock,
      },
      {
        id: 3,
        label: translation('REGISTER.CONFIRM_PASSWORD'),
        placeholder: translation('REGISTER.CONFIRM_PASSWORD_PLACEHOLDER'),
        type: 'confirmPassword',
        value: values?.confirmPassword,
        onChangeText: handleChange('confirmPassword'),
        error: 'confirmPassword' in errors,
        accessibilityLabel: 'Enter confirm password text',
        keyboardType: 'default' as KeyboardTypeOptions,
        ref: refInputs.current[2],
        onSubmitEditing: () => handleSubmit(),
        returnKeyType: 'go' as ReturnKeyTypeOptions,
        returnIcon: IconLock,
      },
    ],
    [values, handleChange, handleSubmit, errors, translation],
  );

  const handleShowPassword = useCallback((type: string) => {
    if (type === 'password') {
      setShowPassword((prevState) => !prevState);
    } else {
      setShowConfirmPassword((prevState) => !prevState);
    }
  }, []);

  const handleClearInput = useCallback(
    (type: string) => {
      switch (type) {
        case 'email':
          handleChange('email')('');
          break;
        case 'password':
          handleChange('password')('');
          break;
        default:
          handleChange('confirmPassword')('');
          break;
      }
    },
    [handleChange],
  );

  const secureTextEntry = useCallback(
    (type: string) => {
      if (type === 'password') {
        return !showPassword;
      }
      return !showConfirmPassword;
    },
    [showPassword, showConfirmPassword],
  );

  const getIconName = (type: string) => {
    if (type === 'password') {
      return showPassword ? 'eye-off' : 'eye';
    }
    if (type === 'confirmPassword') {
      return showConfirmPassword ? 'eye-off' : 'eye';
    }
    return 'eye';
  };

  return (
    <Container>
      {CONFIG_INPUTS.map((input) => (
        <CardInputs key={input.id}>
          <Title>{input.label}</Title>
          <WrapperInputIcon error={input.error}>
            <input.returnIcon />
            <TextInput
              placeholder={input.placeholder}
              value={input.value}
              onChangeText={input.onChangeText}
              accessibilityLabel={input.accessibilityLabel}
              keyboardType={input.keyboardType}
              ref={input.ref}
              onSubmitEditing={input.onSubmitEditing}
              returnKeyType={input.returnKeyType}
              secureTextEntry={secureTextEntry(input.type)}
            />

            {input.value !== '' && (
              <IconClose
                right={input.type === 'password' || input.type === 'confirmPassword' ? 30 : 0}
                onPress={() => handleClearInput(input.type)}
              />
            )}

            {(input.type === 'password' || input.type === 'confirmPassword') && (
              <IconPassword
                name={getIconName(input.type)}
                onPress={() => handleShowPassword(input.type)}
              />
            )}
          </WrapperInputIcon>

          <TextError>{errors && (errors as Record<string, string>)[input.type]}</TextError>
        </CardInputs>
      ))}
    </Container>
  );
};

export default memo(ReturnInputs);
