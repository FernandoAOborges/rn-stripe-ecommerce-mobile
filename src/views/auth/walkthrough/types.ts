export type {
  NativeScrollEvent,
  NativeSyntheticEvent,
  FlatList,
  ListRenderItem,
} from 'react-native';

export interface IWelcomeContents {
  content: string;
  id: number;
  image: number | undefined;
  name: string;
  title: string;
  subtitle: string;
}
