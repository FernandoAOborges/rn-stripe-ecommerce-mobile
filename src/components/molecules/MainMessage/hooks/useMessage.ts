import { useState, useCallback } from 'react';

import type { IMessageConfigProps } from '@/types/global';

const useMessage = () => {
  const [messageConfig, setMessageConfig] = useState<IMessageConfigProps>({
    message: '',
    type: 'error',
  });

  const returnMessage = useCallback((config: IMessageConfigProps) => {
    setMessageConfig(config);
  }, []);

  const clearMessage = useCallback(() => {
    setMessageConfig({ message: '', type: 'error' });
  }, []);

  return {
    messageConfig,
    returnMessage,
    clearMessage,
  };
};

export default useMessage;
