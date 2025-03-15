/* eslint-disable object-curly-newline */
import React, { memo, useCallback } from 'react';
import { FormikErrors, FormikProps } from 'formik';
import {
  CardInput,
  Container,
  IconClose,
  IconEmail,
  TextError,
  TextInput,
  Title,
  WrapperInputIcon,
} from './style';
import { IForgotPasswordViewProps } from '../../validations';

type TDataProps = {
  email: string;
};

interface ReturnInputsProps {
  values: TDataProps;
  handleChange: FormikProps<IForgotPasswordViewProps>['handleChange'];
  handleSubmit: () => void;
  errors: FormikErrors<TDataProps> | Record<string, string>;
  translation: (key: string) => string;
}

const ReturnInputs = ({ values, handleChange, handleSubmit, errors, translation }: ReturnInputsProps) => {
  const handleClearInput = useCallback(() => {
    handleChange('email')('');
  }, [handleChange]);

  return (
    <Container>
      <CardInput>
        <Title>{translation('FORGOT_PASSWORD.EMAIL')}</Title>
        <WrapperInputIcon error={'email' in errors}>
          <IconEmail />
          <TextInput
            placeholder={translation('FORGOT_PASSWORD.EMAIL_PLACEHOLDER')}
            value={values?.email}
            onChangeText={handleChange('email')}
            accessibilityLabel="Enter your email here"
            keyboardType="email-address"
            onSubmitEditing={handleSubmit}
            returnKeyType="go"
          />

          {values?.email !== '' && <IconClose onPress={() => handleClearInput()} />}
        </WrapperInputIcon>
        <TextError>{errors && (errors as Record<string, string>)?.email}</TextError>
      </CardInput>
    </Container>
  );
};

export default memo(ReturnInputs);
