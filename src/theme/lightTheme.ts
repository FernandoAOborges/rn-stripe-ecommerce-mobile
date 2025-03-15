import { DefaultTheme } from 'styled-components/native';

import { Fonts } from '@/constants';

const lightTheme: DefaultTheme = {
  colors: {
    background: '#fff',
    onBackground: '#000',
    primary: '#fff',
    black: '#000',
    white: '#fff',
    border: '#000',
    inactive: '#999999',
    inactiveLight: '#E6E6E6',
    error: '#ff0000',
    success: '#65ba67',
    activityIndicator: '#fff',
    card: '#f2f2f2',
    tabbarIcon: '#000',
    headerBackground: '#fff',
    rating: '#FFA928',
    placeholder: '#999999',
    boxShadow: '1px 1px 5px 3px rgba(0, 0, 0, 0.5)',
  },
  fonts: {
    ...Fonts,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 32,
    '3xl': 48,
    '4xl': 64,
    full: 9999,
  },
  shadow: {
    color: '#000000',
    offset: {
      width: 0,
      height: 2,
    },
    opacity: 0.1,
    radius: 4,
    elevation: 3,
  },
};

export default lightTheme;
