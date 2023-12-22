import { FC } from 'react';

import Styles from './Dashboard.module.css';
import { search } from '../../helpers/search';
import { SearchReturn } from '../../hooks/useCustomSearch';
import { useCustomSort } from '../../hooks/useCustomSort';
import { DataProp } from '../../types/DataProp';
import { Loader } from '../Loader/Loader';
import { Results } from '../Results/Results';
import { Search } from '../Search/Search';
import { Sort } from '../Sort/Sort';

export type DashbrdProp = DataProp & { searchreturn: SearchReturn };

export const Dashboard: FC<DashbrdProp> = ({ datasites, datatests, searchreturn }): JSX.Element => {
  const { getValue, callvalue, resetvalue } = searchreturn;
  const searchresult = search(datatests, getValue);
  const { callsort, sorteddata, sortstate } = useCustomSort(searchresult);
  return (
    <>
      <h1 className={Styles.title}>Dashboard</h1>
      <Search callvalue={callvalue} passvalue={getValue} resetvalue={resetvalue} amount={searchresult.length} />
      {!!searchresult.length && <Sort callsort={callsort} sortstate={sortstate} />}
      {datatests.length > 0 ? (
        <Results datasites={datasites} datatests={sorteddata} resetvalue={resetvalue} />
      ) : (
        <Loader />
      )}
    </>
  );
};
