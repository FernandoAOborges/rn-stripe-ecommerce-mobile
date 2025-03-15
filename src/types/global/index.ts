export enum EThemeProps {
  light = 'light',
  dark = 'dark',
}

export interface IMessageConfigProps {
  message: string;
  type?: 'error' | 'success';
}

export interface IReturnMessageProps {
  returnMessage: (config: IMessageConfigProps) => void;
  clearMessage: () => void;
}

export interface IUserProps {
  uid: string;
  email?: string;
}
