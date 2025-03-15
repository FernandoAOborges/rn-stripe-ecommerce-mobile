import type { ImageProps } from 'react-native';

export interface IAuthTemplateProps {
  title: string;
  navTextInactive: string;
  navTextBold: string;
  handleNavigate: () => void;
  children: React.ReactNode;
  image: ImageProps['source'];
}
