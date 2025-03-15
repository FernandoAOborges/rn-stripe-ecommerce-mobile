import React, { memo } from 'react';

import { Container, ActivityIndicator, Title } from './style';
import type { IMainLoadingProps } from './types';

const MainLoading = ({ title }: IMainLoadingProps) => (
  <Container>
    <ActivityIndicator />
    {!!title && <Title>{title}</Title>}
  </Container>
);

export default memo(MainLoading);
