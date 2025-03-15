import { render, screen } from '@testing-library/react-native';
import React from 'react';

import Text from '../index';

const CONFIG_PROPS = {
  text: 'TextDefault',
  color: { color: 'red' },
};

describe('Text Atom', () => {
  it('renders correctly with children', () => {
    render(<Text>{CONFIG_PROPS.text}</Text>);
    const textElement = screen.getByText(CONFIG_PROPS.text);

    expect(textElement).toBeDefined();
  });

  it('passes additional props to the Text component', () => {
    render(<Text style={CONFIG_PROPS.color}>{CONFIG_PROPS.text}</Text>);
    const textElement = screen.getByText(CONFIG_PROPS.text);

    expect(textElement).toHaveStyle(CONFIG_PROPS.color);
  });
});
