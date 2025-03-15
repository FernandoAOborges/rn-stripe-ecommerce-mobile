import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Text, Title } from './styles';
import type { IButtonNavigationProps } from './types';

const ButtonNavigation = ({
  navTextInactive,
  navTextBold,
  handleNavigate,
}: IButtonNavigationProps) => {
  const { t } = useTranslation();

  return (
    <Container onPress={handleNavigate}>
      <Text>
        {`${t(navTextInactive)} `}
        <Title>{t(navTextBold)}</Title>
      </Text>
    </Container>
  );
};

export default memo(ButtonNavigation);
