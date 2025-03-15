import { render, screen } from '@testing-library/react-native';
import React from 'react';

import Image from '../index';
import { TEST_ID } from '../types';

const CONFIG_PROPS = {
  source: { uri: 'path/to/image.jpg' },
  accessibilityLabel: 'Test image',
};

describe('Image Atom', () => {
  it('renders correctly with source and accessibility label', () => {
    render(
      <Image
        source={CONFIG_PROPS.source}
        accessibilityLabel={CONFIG_PROPS.accessibilityLabel}
        testID={TEST_ID}
      />,
    );

    const imageElement = screen.getByTestId(TEST_ID);
    expect(imageElement).toBeTruthy();
    expect(imageElement.props.source).toEqual(CONFIG_PROPS.source);
    expect(imageElement.props.accessibilityLabel).toBe(CONFIG_PROPS.accessibilityLabel);
  });
});
