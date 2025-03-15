/* eslint-disable object-curly-newline */
import React, { memo } from 'react';

import {
  Container,
  Title,
  WrapperInputIcon,
  Input,
  IconClose,
  TextError,
  WrapperIcon,
} from './styles';
import {
  TEST_ID_ICON_CLOSE,
  TEST_ID_ICON_LEFT,
  TEST_ID_ICON_RIGHT,
  TEST_ID_INPUT,
  TEST_ID_WRAPPER_INPUT_ICON,
} from './types';
import type { IMainInputProps } from './types';

const MainInput = ({
  label,
  value,
  isOutlined = true,
  iconRight,
  iconLeft,
  error,
  ...props
}: IMainInputProps) => {
  const handleClear = () => {
    const { onChangeText } = props;
    onChangeText?.('');
  };

  return (
    <Container>
      {!!label && <Title>{label}</Title>}

      <WrapperInputIcon testID={TEST_ID_WRAPPER_INPUT_ICON} error={!!error} isOutlined={isOutlined}>
        {!!iconLeft && <WrapperIcon testID={TEST_ID_ICON_LEFT}>{iconLeft}</WrapperIcon>}

        <Input testID={TEST_ID_INPUT} value={value} {...props} />

        {!!value && <IconClose onPress={handleClear} testID={TEST_ID_ICON_CLOSE} />}

        {!!iconRight && <WrapperIcon testID={TEST_ID_ICON_RIGHT}>{iconRight}</WrapperIcon>}
      </WrapperInputIcon>

      <TextError>{error}</TextError>
    </Container>
  );
};

export default memo(MainInput);
