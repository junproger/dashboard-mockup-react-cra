import { FC, useCallback, useRef, useState } from 'react';

import Styles from './Dashboard.module.css';
import { search } from '../../helpers/search';
import { DataProp } from '../../types/DataProp';
import { logging } from '../../utils/logging';
import { Loader } from '../Loader/Loader';
import { Results } from '../Results/Results';
import { Search } from '../Search/Search';

export const Dashboard: FC<DataProp> = ({ datasites, datatests }): JSX.Element => {
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
  return (
    <>
      <h1 className={Styles.title}>Dashboard</h1>
      <Search
        passingref={inputRef}
        callvalue={callvalue}
        resetvalue={resetvalue}
        amount={search(datatests, getValue).length}
      />
      {datatests.length > 0 ? (
        <Results datasites={datasites} datatests={search(datatests, getValue)} resetvalue={resetvalue} />
      ) : (
        <Loader />
      )}
    </>
  );
};
