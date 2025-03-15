import { render, fireEvent, screen } from '@testing-library/react-native';
import React from 'react';
import { Keyboard } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { Icon } from '@/components/atoms';
import { darkTheme, lightTheme } from '@/theme';

import MainButton from '../index';
import { DEFAULT_CONFIG, TEST_ID_ACTIVITY_INDICATOR, TEST_ID_BUTTON } from '../types';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const CONFIG_PROPS = {
  title: 'Click me',
  testIdIcon: 'atom-icon-default',
  iconLeft: <Icon family="fontawesome6" name="3d-rotation" testID="atom-icon-default" />,
  onPress: jest.fn(),
};

const MainThemeProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
);

describe('MainButton Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the button with the provided title', () => {
    render(
      <MainThemeProviders>
        <MainButton title={CONFIG_PROPS.title} onPress={CONFIG_PROPS.onPress} />
      </MainThemeProviders>,
    );
    expect(screen.getByText(CONFIG_PROPS.title)).toBeTruthy();
  });

  it('renders the loading title when status is true', () => {
    render(
      <MainThemeProviders>
        <MainButton
          title={CONFIG_PROPS.title}
          titleLoading={DEFAULT_CONFIG.titleLoading}
          isLoading
          onPress={CONFIG_PROPS.onPress}
        />
      </MainThemeProviders>,
    );

    expect(screen.getByTestId(TEST_ID_ACTIVITY_INDICATOR)).toBeTruthy();
    expect(screen.getByText(DEFAULT_CONFIG.titleLoading)).toBeTruthy();
  });

  it('renders the loading title when titleLoading is empty', () => {
    render(
      <MainThemeProviders>
        <MainButton title={CONFIG_PROPS.title} isLoading onPress={CONFIG_PROPS.onPress} />
      </MainThemeProviders>,
    );

    expect(screen.getByText(DEFAULT_CONFIG.titleLoading)).toBeTruthy();
    expect(screen.getByTestId(TEST_ID_ACTIVITY_INDICATOR)).toBeTruthy();
  });

  it('should disable the button when the status prop is true', () => {
    render(
      <MainThemeProviders>
        <MainButton title={CONFIG_PROPS.title} isLoading onPress={CONFIG_PROPS.onPress} />
      </MainThemeProviders>,
    );

    const button = screen.getByTestId(TEST_ID_BUTTON);
    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it('calls onPress and Keyboard.dismiss when the button is pressed', () => {
    render(
      <MainThemeProviders>
        <MainButton title={CONFIG_PROPS.title} onPress={CONFIG_PROPS.onPress} />
      </MainThemeProviders>,
    );

    fireEvent.press(screen.getByTestId(TEST_ID_BUTTON));

    expect(CONFIG_PROPS.onPress).toHaveBeenCalledTimes(1);

    expect(Keyboard.dismiss).toHaveBeenCalledTimes(1);
  });

  it('handles undefined onPress without errors', () => {
    render(
      <MainThemeProviders>
        <MainButton title={CONFIG_PROPS.title} />
      </MainThemeProviders>,
    );

    const button = screen.getByTestId(TEST_ID_BUTTON);
    fireEvent.press(button);
  });

  it('should render left icon when provided', () => {
    render(
      <MainThemeProviders>
        <MainButton
          title={CONFIG_PROPS.title}
          iconLeft={CONFIG_PROPS.iconLeft}
          onPress={CONFIG_PROPS.onPress}
        />
      </MainThemeProviders>,
    );

    const icon = screen.getByTestId(CONFIG_PROPS.testIdIcon);
    expect(icon).toBeTruthy();
  });
});
