import React, { memo } from 'react';

import { Container, Content, Image, Subtitle, Title, WrapperImage } from './styles';
import type { ICardWalkthrough } from './types';

const CardWalkthrough = ({ item }: ICardWalkthrough) => (
  <Container>
    <WrapperImage>
      <Image source={item.image} />
    </WrapperImage>
    <Title>{item.title}</Title>
    <Subtitle>{item.subtitle}</Subtitle>
    <Content>{item.content}</Content>
  </Container>
);

export default memo(CardWalkthrough);
