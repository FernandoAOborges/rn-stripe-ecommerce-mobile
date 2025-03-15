/* eslint-disable object-curly-newline */
import { render, fireEvent, screen } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { darkTheme, lightTheme } from '@/theme';

import MainInput from '../index';
import {
  TEST_ID_ICON_CLOSE,
  TEST_ID_ICON_LEFT,
  TEST_ID_ICON_RIGHT,
  TEST_ID_INPUT,
  TEST_ID_WRAPPER_INPUT_ICON,
} from '../types';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const MainThemeProviders = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
);

const CONFIG_PROPS = {
  label: 'Username',
  value: 'Test Value',
  onChangeText: jest.fn(),
  iconLeft: <View />,
  iconRight: <View />,
  text: 'Test',
  newValue: 'New Value',
  error: 'Error message',
};

describe('MainInput Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with label', () => {
    render(
      <MainThemeProviders>
        <MainInput label={CONFIG_PROPS.label} />
      </MainThemeProviders>,
    );
    const labelElement = screen.getByText(CONFIG_PROPS.label);

    expect(labelElement).toBeDefined();
  });

  it('renders input value correctly', () => {
    render(
      <MainThemeProviders>
        <MainInput label={CONFIG_PROPS.label} value={CONFIG_PROPS.value} />
      </MainThemeProviders>,
    );
    const inputElement = screen.getByDisplayValue(CONFIG_PROPS.value);

    expect(inputElement).toBeDefined();
  });

  it('calls onChangeText when typing', () => {
    render(
      <MainThemeProviders>
        <MainInput onChangeText={CONFIG_PROPS.onChangeText} />
      </MainThemeProviders>,
    );

    const inputElement = screen.getByTestId(TEST_ID_INPUT);
    fireEvent.changeText(inputElement, CONFIG_PROPS.text);

    expect(CONFIG_PROPS.onChangeText).toHaveBeenCalledWith(CONFIG_PROPS.text);
  });

  it('calls onChangeText when clear button is pressed', () => {
    render(
      <MainThemeProviders>
        <MainInput value={CONFIG_PROPS.value} onChangeText={CONFIG_PROPS.onChangeText} />
      </MainThemeProviders>,
    );
    const clearButton = screen.getByTestId(TEST_ID_ICON_CLOSE);

    fireEvent.press(clearButton);

    expect(CONFIG_PROPS.onChangeText).toHaveBeenCalledWith('');
  });

  it('does not throw an error when onChangeText is not passed', () => {
    render(
      <MainThemeProviders>
        <MainInput value={CONFIG_PROPS.value} />
      </MainThemeProviders>,
    );

    const clearButton = screen.getByTestId(TEST_ID_ICON_CLOSE);
    fireEvent.press(clearButton);

    expect(CONFIG_PROPS.onChangeText).not.toHaveBeenCalled();
  });

  it('displays error message correctly', () => {
    render(
      <MainThemeProviders>
        <MainInput error={CONFIG_PROPS.error} />
      </MainThemeProviders>,
    );
    const errorElement = screen.getByText(CONFIG_PROPS.error);

    expect(errorElement).toBeDefined();
  });

  it('displays left and right icons correctly', () => {
    render(
      <MainThemeProviders>
        <MainInput iconLeft={CONFIG_PROPS.iconLeft} iconRight={CONFIG_PROPS.iconRight} />
      </MainThemeProviders>,
    );

    expect(screen.getByTestId(TEST_ID_ICON_LEFT)).toBeDefined();
    expect(screen.getByTestId(TEST_ID_ICON_RIGHT)).toBeDefined();
  });

  it('displays clear icon when value exists', () => {
    render(
      <MainThemeProviders>
        <MainInput value={CONFIG_PROPS.value} />
      </MainThemeProviders>,
    );

    expect(screen.getByTestId(TEST_ID_ICON_CLOSE)).toBeDefined();
  });

  it('does not display clear icon when value is empty', () => {
    render(
      <MainThemeProviders>
        <MainInput value="" />
      </MainThemeProviders>,
    );

    expect(screen.queryByTestId(TEST_ID_ICON_CLOSE)).toBeNull();
  });

  it('removes error message when value changes', () => {
    const { rerender } = render(
      <MainThemeProviders>
        <MainInput value="" error={CONFIG_PROPS.error} onChangeText={CONFIG_PROPS.onChangeText} />
      </MainThemeProviders>,
    );

    expect(screen.getByText(CONFIG_PROPS.error)).toBeDefined();

    rerender(
      <MainThemeProviders>
        <MainInput
          value={CONFIG_PROPS.newValue}
          errors={{}}
          onChangeText={CONFIG_PROPS.onChangeText}
        />
      </MainThemeProviders>,
    );
    expect(screen.queryByText(CONFIG_PROPS.error)).toBeNull();
  });

  it('renders correctly when label is missing', () => {
    render(
      <MainThemeProviders>
        <MainInput />
      </MainThemeProviders>,
    );
    expect(screen.queryByText(CONFIG_PROPS.label)).toBeNull();
  });

  it('applies correct border styles when outlined', () => {
    render(
      <MainThemeProviders>
        <MainInput isOutlined />
      </MainThemeProviders>,
    );
    const wrapper = screen.getByTestId(TEST_ID_WRAPPER_INPUT_ICON);

    expect(wrapper).toHaveStyle({ borderWidth: 1 });
  });

  it('applies correct border styles when not outlined', () => {
    render(
      <MainThemeProviders>
        <MainInput isOutlined={false} />
      </MainThemeProviders>,
    );
    const wrapper = screen.getByTestId(TEST_ID_WRAPPER_INPUT_ICON);

    expect(wrapper).toHaveStyle({ borderBottomWidth: 1 });
  });

  it('applies error border when isOutlined and has error', () => {
    render(
      <MainThemeProviders>
        <MainInput isOutlined error={CONFIG_PROPS.error} />
      </MainThemeProviders>,
    );

    const wrapper = screen.getByTestId(TEST_ID_WRAPPER_INPUT_ICON);
    expect(wrapper).toHaveStyle({ borderColor: themes.light.colors.error });
  });

  it('applies normal border when isOutlined and no error', () => {
    render(
      <MainThemeProviders>
        <MainInput isOutlined error="" />
      </MainThemeProviders>,
    );

    const wrapper = screen.getByTestId(TEST_ID_WRAPPER_INPUT_ICON);
    expect(wrapper).toHaveStyle({ borderColor: themes.light.colors.border });
  });

  it('applies error border-bottom when not outlined and has error', () => {
    render(
      <MainThemeProviders>
        <MainInput isOutlined={false} error={CONFIG_PROPS.error} />
      </MainThemeProviders>,
    );

    const wrapper = screen.getByTestId(TEST_ID_WRAPPER_INPUT_ICON);
    expect(wrapper).toHaveStyle({ borderBottomColor: themes.light.colors.error });
  });

  it('applies normal border-bottom when not outlined and no error', () => {
    render(
      <MainThemeProviders>
        <MainInput isOutlined={false} error="" />
      </MainThemeProviders>,
    );

    const wrapper = screen.getByTestId(TEST_ID_WRAPPER_INPUT_ICON);
    expect(wrapper).toHaveStyle({ borderBottomColor: themes.light.colors.border });
  });
});
