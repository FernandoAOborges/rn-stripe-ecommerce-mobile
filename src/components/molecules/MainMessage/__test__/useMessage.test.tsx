/* eslint-disable import/no-extraneous-dependencies */
import { renderHook, act } from '@testing-library/react-native';

import useMessage from '../hooks/useMessage';
import { IMessageConfigProps } from '@/types/global';

const CONFIG_PROPS = {
  message: 'Error occurred',
  typeError: 'error' as IMessageConfigProps['type'],
  typeSuccess: 'success' as IMessageConfigProps['type'],
};

describe('hook useMessage()', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should set the initial message config', () => {
    const { result } = renderHook(() => useMessage());
    expect(result.current.messageConfig).toEqual({
      message: '',
      type: CONFIG_PROPS.typeError,
    });
  });

  it('should update the message config when returnMessage is called', () => {
    const { result } = renderHook(() => useMessage());

    act(() => {
      result.current.returnMessage({
        message: CONFIG_PROPS.message,
        type: CONFIG_PROPS.typeSuccess,
      });
    });

    expect(result.current.messageConfig).toEqual({
      message: CONFIG_PROPS.message,
      type: CONFIG_PROPS.typeSuccess,
    });
  });

  it('should clear the message config when clearMessage is called', () => {
    const { result } = renderHook(() => useMessage());

    act(() => {
      result.current.returnMessage({
        message: CONFIG_PROPS.message,
        type: CONFIG_PROPS.typeSuccess,
      });
    });

    act(() => {
      result.current.clearMessage();
    });

    expect(result.current.messageConfig).toEqual({
      message: '',
      type: CONFIG_PROPS.typeError,
    });
  });

  it('should clear the message config after timeout', async () => {
    const { result } = renderHook(() => useMessage(5000));

    act(() => {
      result.current.returnMessage({
        message: CONFIG_PROPS.message,
        type: CONFIG_PROPS.typeSuccess,
      });
    });

    expect(result.current.messageConfig.message).toBe(CONFIG_PROPS.message);

    await act(async () => {
      jest.advanceTimersByTime(5000);
    });

    expect(result.current.messageConfig.message).toBe('');
  });
});
