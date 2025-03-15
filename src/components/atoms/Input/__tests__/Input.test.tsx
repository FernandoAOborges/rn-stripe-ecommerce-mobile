import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { darkTheme, lightTheme } from '@/theme';

import Input from '../index';
import { TEST_ID } from '../types';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const CONFIG_PROPS = {
  textDefault: 'Hello, World!',
  event: 'onChangeText',
};

const MainThemeProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
);

describe('Input Atom', () => {
  it('renders correctly', () => {
    render(
      <MainThemeProviders>
        <Input />
      </MainThemeProviders>,
    );
    const inputElement = screen.getByTestId(TEST_ID);
    expect(inputElement).toBeDefined();
  });

  it('calls onChange when input value changes', () => {
    const mockOnChange = jest.fn();
    render(
      <MainThemeProviders>
        <Input onChangeText={mockOnChange} />
      </MainThemeProviders>,
    );

    fireEvent(screen.getByTestId(TEST_ID), CONFIG_PROPS.event, CONFIG_PROPS.textDefault);
    expect(mockOnChange).toHaveBeenCalledWith(CONFIG_PROPS.textDefault);
  });

  it('applies custom props', () => {
    render(
      <MainThemeProviders>
        <Input placeholder={CONFIG_PROPS.textDefault} />
      </MainThemeProviders>,
    );

    const inputElement = screen.getByTestId(TEST_ID);
    expect(inputElement.props.placeholder).toBe(CONFIG_PROPS.textDefault);
  });
});
