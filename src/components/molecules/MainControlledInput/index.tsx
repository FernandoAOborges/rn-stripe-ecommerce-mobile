import React, { memo } from 'react';
import { Control, Controller } from 'react-hook-form';

import MainInput from '../MainInput';

interface IMainControlledInputProps extends React.ComponentProps<typeof MainInput> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
}

const MainControlledInput = ({ control, name, ...props }: IMainControlledInputProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field, fieldState }) => (
      <MainInput
        {...props}
        value={field.value}
        onChangeText={field.onChange}
        error={fieldState.error?.message}
      />
    )}
  />
);

export default memo(MainControlledInput);
