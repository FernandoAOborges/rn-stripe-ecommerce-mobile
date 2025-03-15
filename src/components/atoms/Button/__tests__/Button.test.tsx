import { render, fireEvent, screen } from '@testing-library/react-native';
import React from 'react';

import Button from '../index';
import { DEFAULT_CONFIG, TEST_ID } from '../types';

const CONFIG_PROPS = {
  buttonText: 'Click me',
  customTestId: 'custom-test-id',
  customAccessibilityLabel: 'Custom Accessibility Label',
  onPress: jest.fn(),
};

describe('Button Atom', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders button with correct text', () => {
    render(<Button>{CONFIG_PROPS.buttonText}</Button>);
    const buttonElement = screen.getByTestId(TEST_ID);
    expect(buttonElement).toBeTruthy();
  });

  test('calls onClick handler when button is clicked', () => {
    render(<Button onPress={CONFIG_PROPS.onPress}>{CONFIG_PROPS.buttonText}</Button>);
    const buttonElement = screen.getByTestId(TEST_ID);
    fireEvent.press(buttonElement);
    expect(CONFIG_PROPS.onPress).toHaveBeenCalledTimes(1);
  });

  test('should not call onPress when button is disabled', () => {
    render(
      <Button onPress={CONFIG_PROPS.onPress} disabled>
        {CONFIG_PROPS.buttonText}
      </Button>,
    );

    const button = screen.getByTestId(TEST_ID);
    fireEvent.press(button);
    expect(CONFIG_PROPS.onPress).not.toHaveBeenCalled();
  });

  test('should have correct accessibility attributes', () => {
    render(
      <Button accessibilityLabel={CONFIG_PROPS.customAccessibilityLabel}>
        {CONFIG_PROPS.buttonText}
      </Button>,
    );

    const button = screen.getByTestId(TEST_ID);
    expect(button.props.accessibilityRole).toBe(DEFAULT_CONFIG.accessibilityRole);
    expect(button.props.accessibilityLabel).toBe(CONFIG_PROPS.customAccessibilityLabel);
  });

  test('should apply disabled styles', () => {
    render(<Button disabled>{CONFIG_PROPS.buttonText}</Button>);

    const button = screen.getByTestId(TEST_ID);
    expect(button.props.style.opacity).toBe(1);
  });

  test('should not re-render when props dont change', () => {
    render(<Button testID={CONFIG_PROPS.customTestId}>{CONFIG_PROPS.buttonText}</Button>);
    const firstRender = screen.getByTestId(CONFIG_PROPS.customTestId);

    screen.update(<Button testID={CONFIG_PROPS.customTestId}>{CONFIG_PROPS.buttonText}</Button>);
    const secondRender = screen.getByTestId(CONFIG_PROPS.customTestId);

    expect(firstRender).toBe(secondRender);
  });
});
