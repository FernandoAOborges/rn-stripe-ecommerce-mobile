import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Title } from './styles';
import type { IHeaderProps } from './types';

const Header = ({ title }: IHeaderProps) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t(title)}</Title>
    </Container>
  );
};
export default memo(Header);
