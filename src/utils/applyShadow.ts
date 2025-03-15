// utils/applyShadow.ts
import { Platform } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

const applyShadow = (theme: DefaultTheme) => ({
  ...Platform.select({
    ios: {
      shadowColor: theme.shadow.color,
      shadowOffset: theme.shadow.offset,
      shadowOpacity: theme.shadow.opacity,
      shadowRadius: theme.shadow.radius,
    },
    android: {
      elevation: theme.shadow.elevation,
    },
  }),
});

export default applyShadow;
