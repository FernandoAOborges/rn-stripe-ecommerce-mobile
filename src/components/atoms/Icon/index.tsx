import { IconProps } from '@react-native-vector-icons/common';
import React, { memo } from 'react';

import type { TIconFamilyProps, TIconNameProps, IIconProps } from './types';
import { ERROR_MESSAGE, TEST_ID, iconComponents } from './types';

const Icon = <T extends TIconFamilyProps>({ family, ...props }: IIconProps<T>) => {
  const IconComponent = iconComponents[family] as unknown as React.ComponentType<
    IconProps<TIconNameProps<T>>
  >;

  if (!IconComponent) {
    throw new Error(`${ERROR_MESSAGE} ${family}`);
  }

  return <IconComponent testID={TEST_ID} {...props} />;
};

export default memo(Icon);
