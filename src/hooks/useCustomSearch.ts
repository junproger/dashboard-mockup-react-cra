import { useCallback, useRef, useState } from 'react';

import { logging } from '../utils/logging';

export const useCustomSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [getValue, setValue] = useState<string>('');
  const callvalue = useCallback((value: string): void => {
    setValue(value);
    logging(value);
  }, []);
  const resetvalue = useCallback((): void => {
    inputRef.current!.value = '';
    setValue('');
  }, []);
  return {
    inputRef,
    getValue,
    callvalue,
    resetvalue,
  };
};
