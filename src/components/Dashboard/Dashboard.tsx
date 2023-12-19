import { FC, useCallback, useState } from 'react';

import Styles from './Dashboard.module.css';
import { search } from '../../helpers/search';
import { DataProp } from '../../types/DataProp';
import { logging } from '../../utils/logging';
import { Noresults } from '../Noresults/Noresults';
import { Results } from '../Results/Results';
import { Search } from '../Search/Search';

export const Dashboard: FC<DataProp> = ({ datasites, datatests }): JSX.Element => {
  const [getValue, setValue] = useState<string>('');
  const callvalue = useCallback((value: string): void => {
    setValue(value);
    logging(value);
  }, []);
  return (
    <>
      <h1 className={Styles.title}>Dashboard</h1>
      <Search callvalue={callvalue} amount={search(datatests, getValue).length} />
      {datatests.length > 0 ? <Results datasites={datasites} datatests={search(datatests, getValue)} /> : <Noresults />}
    </>
  );
};
