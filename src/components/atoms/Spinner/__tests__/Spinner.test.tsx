import { render, screen } from '@testing-library/react-native';
import React from 'react';

import Spinner from '../index';
import { TEST_ID } from '../types';

const CONFIG_PROPS = {
  color: 'red',
  size: 30,
};

describe('Spinner Atom', () => {
  it('renders correctly', () => {
    render(<Spinner />);
    const spinnerElement = screen.getByTestId(TEST_ID);
    expect(spinnerElement).toBeDefined();
  });

  it('renders correctly with custom props', () => {
    render(<Spinner color={CONFIG_PROPS.color} size={CONFIG_PROPS.size} />);
    const spinnerElement = screen.getByTestId(TEST_ID);
    expect(spinnerElement.props.color).toBe(CONFIG_PROPS.color);
    expect(spinnerElement.props.size).toBe(CONFIG_PROPS.size);
  });
});
