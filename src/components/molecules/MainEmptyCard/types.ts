export interface IEmptyListMessageProps {
  title?: string;
  onPress?: () => void;
  buttonTitle?: string;
  subTitle?: string;
  isLoading?: boolean;
}

export const DEFAULT_CONFIG = {
  title: 'No data available',
  subTitle: 'Try again later or contact support',
  buttonTitle: 'Load Again',
  roleButton: 'button',
};
