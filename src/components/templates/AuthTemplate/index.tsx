import React, { memo } from 'react';

import { useKeyboardVisibility } from '@/hooks';

import ButtonNavigation from './components/ButtonNavigation';
import Header from './components/Header';
import ReturnImage from './components/ReturnImage';
import { Container } from './styles';
import type { IAuthTemplateProps } from './types';

const AuthTemplate = ({
  title,
  navTextInactive,
  navTextBold,
  handleNavigate,
  image,
  children,
}: IAuthTemplateProps) => {
  const keyboardVisibility = useKeyboardVisibility();

  return (
    <Container>
      <Header title={title} />

      {children}

      <ButtonNavigation
        navTextInactive={navTextInactive}
        navTextBold={navTextBold}
        handleNavigate={handleNavigate}
      />

      {!keyboardVisibility && <ReturnImage image={image} />}
    </Container>
  );
};

export default memo(AuthTemplate);
