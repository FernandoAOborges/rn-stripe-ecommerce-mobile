import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { darkTheme, lightTheme } from '@/theme';

import MainLoading from '../index';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const MainThemeProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
);

const CONFIG_PROPS = {
  title: 'Loading...',
};

describe('MainLoading Component', () => {
  it('renders correctly with title', () => {
    render(
      <MainThemeProviders>
        <MainLoading title={CONFIG_PROPS.title} />
      </MainThemeProviders>,
    );
    const titleElement = screen.getByText(CONFIG_PROPS.title);

    expect(titleElement).toBeDefined();
  });

  it('renders correctly without title', () => {
    render(
      <MainThemeProviders>
        <MainLoading />
      </MainThemeProviders>,
    );
    const titleElement = screen.queryByTestId(CONFIG_PROPS.title);

    expect(titleElement).toBeNull();
  });
});
