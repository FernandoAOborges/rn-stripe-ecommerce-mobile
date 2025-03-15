import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      background: string;
      onBackground: string;
      primary: string;
      black: string;
      white: string;
      border: string;
      inactive: string;
      inactiveLight: string;
      error: string;
      success: string;
      activityIndicator: string;
      card: string;
      tabbarIcon: string;
      headerBackground: string;
      rating: string;
      placeholder: string;
      boxShadow: string;
    };
    fonts: {
      black: string;
      blackItalic: string;
      bold: string;
      boldItalic: string;
      italic: string;
      light: string;
      lightItalic: string;
      medium: string;
      mediumItalic: string;
      regular: string;
      thin: string;
      thinItalic: string;
    };
    fontSizes: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
    borderRadius: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
      '2xl': number;
      '3xl': number;
      '4xl': number;
      full: number;
    };
    shadow: {
      color: string;
      offset: {
        width: number;
        height: number;
      };
      opacity: number;
      radius: number;
      elevation: number;
    };
  }
}
