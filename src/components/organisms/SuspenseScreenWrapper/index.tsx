import React, { memo, Suspense } from 'react';

import { MainLoading } from '@/components/molecules';

import { WrapperLoading } from './styles';
import type { ISuspenseScreenWrapperProps } from './types';

const SuspenseScreenWrapper = ({
  children,
  title = 'Carregando...',
}: ISuspenseScreenWrapperProps) => (
  <Suspense
    fallback={
      <WrapperLoading>
        <MainLoading title={title} />
      </WrapperLoading>
    }
  >
    {children}
  </Suspense>
);

export default memo(SuspenseScreenWrapper);
