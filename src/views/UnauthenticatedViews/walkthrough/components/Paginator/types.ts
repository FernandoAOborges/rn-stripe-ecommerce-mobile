import type { Animated } from 'react-native';

export interface IPaginatorProps<T> {
  images: T[];
  scrollX: Animated.Value;
}
