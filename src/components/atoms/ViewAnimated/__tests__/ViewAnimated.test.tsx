import { render, screen } from '@testing-library/react-native';
import React from 'react';

import ViewAnimated from '../index';
import { TEST_ID } from '../types';

const CONFIG_PROPS = {
  customTestID: 'custom-test-view',
  baseStyle: { backgroundColor: 'red' },
};

describe('View Animated Atom', () => {
  it('renders correctly with children', () => {
    render(<ViewAnimated />);
    const viewElement = screen.getByTestId(TEST_ID);

    expect(viewElement).toBeDefined();
  });

  it('passes props correctly', () => {
    render(<ViewAnimated testID={CONFIG_PROPS.customTestID} style={CONFIG_PROPS.baseStyle} />);
    const viewElement = screen.getByTestId(CONFIG_PROPS.customTestID);

    expect(viewElement).toHaveStyle(CONFIG_PROPS.baseStyle);
  });
});
