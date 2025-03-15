/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react-native';
import React, { act } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { darkTheme, lightTheme } from '@/theme';
import type { IMessageConfigProps, IReturnMessageProps } from '@/types/global';

import MainMessage from '../index';
import { TEST_ID } from '../types';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const MainThemeProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
);

const CONFIG_PROPS = {
  ref: React.createRef<IReturnMessageProps>(),
  message: 'Error occurred',
  typeError: 'error' as IMessageConfigProps['type'],
  typeSuccess: 'success' as IMessageConfigProps['type'],
};

describe('MainMessage Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initially render null', () => {
    render(<MainMessage />);

    const animatedView = screen.queryByTestId(TEST_ID);

    expect(animatedView).toBeNull();
  });

  it('should display an error message when returnMessage is called', () => {
    render(
      <MainThemeProviders>
        <MainMessage ref={CONFIG_PROPS.ref} />
      </MainThemeProviders>,
    );

    act(() => {
      CONFIG_PROPS.ref.current?.returnMessage({
        message: CONFIG_PROPS.message,
        type: CONFIG_PROPS.typeError,
      });
    });

    const animatedView = screen.queryByTestId(TEST_ID);

    expect(animatedView).toBeTruthy();
    expect(screen.getByText(CONFIG_PROPS.message)).toBeTruthy();
  });

  it('should clear the message when clearMessage is called', () => {
    render(
      <MainThemeProviders>
        <MainMessage ref={CONFIG_PROPS.ref} />
      </MainThemeProviders>,
    );

    act(() => {
      CONFIG_PROPS.ref.current?.returnMessage({
        message: CONFIG_PROPS.message,
        type: CONFIG_PROPS.typeError,
      });
    });

    act(() => {
      CONFIG_PROPS.ref.current?.clearMessage();
    });

    expect(screen.queryByText(CONFIG_PROPS.message)).toBeNull();
  });

  it('should handle multiple message types', () => {
    const { rerender } = render(
      <MainThemeProviders>
        <MainMessage ref={CONFIG_PROPS.ref} />
      </MainThemeProviders>,
    );

    act(() => {
      CONFIG_PROPS.ref.current?.returnMessage({
        message: CONFIG_PROPS.message,
        type: CONFIG_PROPS.typeError,
      });
    });

    let animatedView = screen.queryByTestId(TEST_ID);

    expect(animatedView).toHaveStyle({ backgroundColor: themes.light.colors.error });
    expect(screen.getByText(CONFIG_PROPS.message)).toBeTruthy();

    act(() => {
      CONFIG_PROPS.ref.current?.returnMessage({
        message: CONFIG_PROPS.message,
        type: CONFIG_PROPS.typeSuccess,
      });
    });

    rerender(
      <MainThemeProviders>
        <MainMessage ref={CONFIG_PROPS.ref} />
      </MainThemeProviders>,
    );

    animatedView = screen.getByTestId(TEST_ID);
    expect(animatedView).toHaveStyle({ backgroundColor: themes.light.colors.success });
    expect(screen.getByText(CONFIG_PROPS.message)).toBeTruthy();
  });
});
