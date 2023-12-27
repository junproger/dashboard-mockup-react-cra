import { FC, memo } from 'react';

import Styles from './Dashboard.module.css';
import { SearchReturn } from '../../hooks/useCustomSearch';
import { SortReturn } from '../../hooks/useCustomSort';
import { Test } from '../../types/ApiTypes';
import { DataProp } from '../../types/DataProp';
import { Loader } from '../Loader/Loader';
import { Results } from '../Results/Results';
import { Search } from '../Search/Search';
import { Sort } from '../Sort/Sort';

export type DashbrdProp = DataProp & { searchreturn: SearchReturn; searchresult: [] | Test[]; sortreturn: SortReturn };

const DashboardMemo: FC<DashbrdProp> = ({
  datasites,
  datatests,
  searchreturn,
  searchresult,
  sortreturn,
}): JSX.Element => {
  const { getValue, callvalue, resetvalue } = searchreturn;
  const { callsort, sorteddata, sortstate } = sortreturn;
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

export const Dashboard = memo(DashboardMemo);
