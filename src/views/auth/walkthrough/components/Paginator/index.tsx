import React, { memo } from 'react';
import { useWindowDimensions } from 'react-native';

import { ViewAnimated, Container } from './styles';
import type { IPaginatorProps } from './types';

const Paginator = <T,>({ images, scrollX }: IPaginatorProps<T>) => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <Container>
      {images?.map((_, imageIndex) => {
        const width = scrollX?.interpolate({
          inputRange: [
            windowWidth * (imageIndex - 1),
            windowWidth * imageIndex,
            windowWidth * (imageIndex + 1),
          ],
          outputRange: [8, 16, 8],
          extrapolate: 'clamp',
        });
        return <ViewAnimated key={`${imageIndex.toString()}`} style={{ width }} />;
      })}
    </Container>
  );
};

export default memo(Paginator);
