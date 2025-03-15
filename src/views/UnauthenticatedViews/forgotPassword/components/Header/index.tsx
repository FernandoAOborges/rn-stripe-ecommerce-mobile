import React, { memo } from 'react';
import { Container, Text } from './style';

interface IHeaderProps {
  translation: (key: string) => string;
}

const Header = ({ translation }: IHeaderProps) => (
  <Container>
    <Text>{translation('FORGOT_PASSWORD.TITLE')}</Text>
  </Container>
);
export default memo(Header);
