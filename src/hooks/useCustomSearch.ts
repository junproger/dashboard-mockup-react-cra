import { useCallback, useState } from 'react';

export type SearchReturn = {
  getValue: string;
  callvalue: (value: string) => void;
  resetvalue: () => void;
};

export const useCustomSearch = (): SearchReturn => {
  const [getValue, setValue] = useState<string>('');
  const callvalue = useCallback((value: string): void => {
    setValue(value);
  }, []);
  const resetvalue = useCallback((): void => {
    setValue('');
  }, []);
  return {
    getValue,
    callvalue,
    resetvalue,
  };
};
