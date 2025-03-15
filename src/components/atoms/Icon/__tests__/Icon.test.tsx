import { render, screen } from '@testing-library/react-native';
import React from 'react';

import Icon from '../index';
import { ERROR_MESSAGE, TEST_ID } from '../types';

const CONFIG_PROPS = {
  family: 'fontawesome6',
  name: 'check',
  color: 'black',
  size: 20,
  unknownFamily: 'UnknownFamily',
} as const;

describe('Icon Atom', () => {
  it('renders the correct icon component based on the provided family', () => {
    render(
      <Icon
        family={CONFIG_PROPS.family}
        name={CONFIG_PROPS.name}
        color={CONFIG_PROPS.color}
        size={CONFIG_PROPS.size}
      />,
    );

    const iconElement = screen.getByTestId(TEST_ID);
    expect(iconElement.props.name).toBe(CONFIG_PROPS.name);
    expect(iconElement.props.color).toBe(CONFIG_PROPS.color);
    expect(iconElement.props.size).toBe(CONFIG_PROPS.size);
  });

  it('throws an error when an unknown family is provided', () => {
    expect(() =>
      render(
        <Icon
          family={CONFIG_PROPS.unknownFamily}
          name={CONFIG_PROPS.name}
          color={CONFIG_PROPS.color}
          size={CONFIG_PROPS.size}
        />,
      ),
    ).toThrow(`${ERROR_MESSAGE} ${CONFIG_PROPS.unknownFamily}`);
  });
});
