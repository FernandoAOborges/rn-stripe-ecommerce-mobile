import { useEffect } from 'react';

const useDebouncedResetWaiting = (setIsWaiting, time = 1000) => {
  useEffect(() => {
    if (setIsWaiting) {
      const timer = setTimeout(() => {
        setIsWaiting(false);
      }, time);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [setIsWaiting, time]);
};

export default useDebouncedResetWaiting;
