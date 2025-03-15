/* eslint-disable import/no-extraneous-dependencies */
import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { darkTheme, lightTheme } from '@/theme';

import MainEmptyCard from '../index';
import { DEFAULT_CONFIG } from '../types';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const MainThemeProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
);

const CONFIG_PROPS = {
  title: 'Custom Title',
  subTitle: 'Custom Subtitle',
  buttonTitle: 'Custom Button',
  roleButton: 'button',
};

describe('EmptyListMessage Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(
      <MainThemeProviders>
        <MainEmptyCard />
      </MainThemeProviders>,
    );

    const titleElement = screen.getByText(DEFAULT_CONFIG.title);
    expect(titleElement).toBeTruthy();

    const subTitleElement = screen.queryByText(DEFAULT_CONFIG.subTitle);
    expect(subTitleElement).toBeTruthy();

    const buttonElement = screen.queryByRole(DEFAULT_CONFIG.roleButton);
    expect(buttonElement).toBeFalsy();
  });

  it('renders correctly with custom props', () => {
    const onPressMock = jest.fn();
    render(
      <MainThemeProviders>
        <MainEmptyCard
          title={CONFIG_PROPS.title}
          subTitle={CONFIG_PROPS.subTitle}
          buttonTitle={CONFIG_PROPS.buttonTitle}
          onPress={onPressMock}
        />
      </MainThemeProviders>,
    );

    const titleElement = screen.getByText(CONFIG_PROPS.title);
    expect(titleElement).toBeTruthy();

    const subTitleElement = screen.getByText(CONFIG_PROPS.subTitle);
    expect(subTitleElement).toBeTruthy();

    const buttonElement = screen.getByRole(CONFIG_PROPS.roleButton);
    expect(buttonElement).toBeTruthy();
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });

  // end
});
