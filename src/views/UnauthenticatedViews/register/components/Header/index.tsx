import React, { memo } from 'react';
import { Container, Text } from './style';

interface IHeaderProps {
  translation: (key: string) => string;
}

const Header = ({ translation }: IHeaderProps) => (
  <Container>
    <Text>{translation('REGISTER.TITLE')}</Text>
  </Container>
);
export default memo(Header);
