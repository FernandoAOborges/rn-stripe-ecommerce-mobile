import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { StatusBar } from 'react-native';

import CustomStatusBar from '../index';
import { TEST_ID } from '../types';

const CONFIG_PROPS = {
  barStyle: 'light-content',
  backgroundColor: 'blue',
} as const;

describe('StatusBar Atom', () => {
  it('renders correctly with default props', () => {
    render(
      <CustomStatusBar
        backgroundColor={CONFIG_PROPS.backgroundColor}
        barStyle={CONFIG_PROPS.barStyle}
      />,
    );
    const statusBarElement = screen.getByTestId(TEST_ID);
    const statusBarElementByType = screen.UNSAFE_queryByType(StatusBar);
    expect(statusBarElement).toBeDefined();
    expect(statusBarElementByType).toBeTruthy();
  });

  it('configures StatusBar with custom props', () => {
    render(
      <CustomStatusBar
        barStyle={CONFIG_PROPS.barStyle}
        backgroundColor={CONFIG_PROPS.backgroundColor}
      />,
    );
    const statusBarElement = screen.UNSAFE_queryByType(StatusBar);

    expect(statusBarElement?.props.barStyle).toBe(CONFIG_PROPS.barStyle);
    expect(statusBarElement?.props.backgroundColor).toBe(CONFIG_PROPS.backgroundColor);
  });
});
