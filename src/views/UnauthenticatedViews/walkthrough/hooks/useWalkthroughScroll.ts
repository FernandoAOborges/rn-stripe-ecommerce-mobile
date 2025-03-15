import { useCallback, useMemo, useRef, useState } from 'react';
import { Animated } from 'react-native';

import type { NativeScrollEvent, NativeSyntheticEvent, FlatList } from '../types';

import useWelcomeContents from './useWelcomeContents';

const useWalkthroughScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatlistRef = useRef<FlatList>(null);

  const WalkthroughData = useWelcomeContents();

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) =>
      Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        {
          useNativeDriver: false,
          listener: ({ nativeEvent }: NativeSyntheticEvent<NativeScrollEvent>) => {
            const index = Math.round(
              nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
            );
            setCurrentIndex(index);
          },
        },
      )(event),
    [scrollX],
  );

  const scrollTo = useCallback(
    (direction: 1 | -1) => {
      const nextIndex = currentIndex + direction;
      if (nextIndex >= 0 && nextIndex < WalkthroughData.length) {
        flatlistRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      }
    },
    [currentIndex, WalkthroughData?.length],
  );

  const percentage = useMemo(
    () => (currentIndex / (WalkthroughData.length - 1)) * 100,
    [currentIndex, WalkthroughData?.length],
  );

  return {
    scrollX,
    flatlistRef,
    handleScroll,
    scrollTo,
    percentage,
    WalkthroughData,
  };
};

export default useWalkthroughScroll;
