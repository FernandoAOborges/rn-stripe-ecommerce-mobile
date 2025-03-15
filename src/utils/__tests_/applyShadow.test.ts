import { Platform } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

import { lightTheme } from '@/theme';

import applyShadow from '../applyShadow';

describe('function applyShadow()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return shadow styles for iOS', () => {
    (Platform.select as jest.Mock).mockImplementation((spec) => spec.ios);

    const result = applyShadow(lightTheme);

    expect(result).toEqual({
      shadowColor: lightTheme.shadow.color,
      shadowOffset: lightTheme.shadow.offset,
      shadowOpacity: lightTheme.shadow.opacity,
      shadowRadius: lightTheme.shadow.radius,
    });
  });

  it('should return elevation for Android', () => {
    (Platform.select as jest.Mock).mockImplementation((spec) => spec.android);

    const result = applyShadow(lightTheme);

    expect(result).toEqual({
      elevation: lightTheme.shadow.elevation,
    });
  });

  it('should handle incomplete theme', () => {
    (Platform.select as jest.Mock).mockImplementation((spec) => spec.ios);

    const incompleteTheme = { shadow: {} } as DefaultTheme;
    const result = applyShadow(incompleteTheme);

    expect(result).toEqual({
      shadowColor: undefined,
      shadowOffset: undefined,
      shadowOpacity: undefined,
      shadowRadius: undefined,
    });
  });

  it('should ensure elevation is a number on Android', () => {
    (Platform.select as jest.Mock).mockImplementation((spec) => spec.android);

    type TResultProps = {
      elevation: number;
    };

    const result = applyShadow(lightTheme) as TResultProps;

    expect(typeof result.elevation).toBe('number');
  });
});
