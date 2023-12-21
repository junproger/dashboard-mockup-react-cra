import { RefObject, useCallback, useRef, useState } from 'react';

import { logging } from '../utils/logging';

export type SearchReturn = {
  inputRef: RefObject<HTMLInputElement>;
  getValue: string;
  callvalue: (value: string) => void;
  resetvalue: () => void;
};

export const useCustomSearch = (): SearchReturn => {
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
