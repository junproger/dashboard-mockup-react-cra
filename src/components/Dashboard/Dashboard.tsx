import { FC } from 'react';

import Styles from './Dashboard.module.css';
import { search } from '../../helpers/search';
import { useCustomSearch } from '../../hooks/useCustomSearch';
import { useCustomSort } from '../../hooks/useCustomSort';
import { DataProp } from '../../types/DataProp';
import { Loader } from '../Loader/Loader';
import { Results } from '../Results/Results';
import { Search } from '../Search/Search';
import { Sort } from '../Sort/Sort';

export const Dashboard: FC<DataProp> = ({ datasites, datatests }): JSX.Element => {
  const { inputRef, getValue, callvalue, resetvalue } = useCustomSearch();
  const searchresult = search(datatests, getValue);
  const { callsort, sorteddata, sortstate } = useCustomSort(searchresult);
  return (
    <>
      <h1 className={Styles.title}>Dashboard</h1>
      <Search passingref={inputRef} callvalue={callvalue} resetvalue={resetvalue} amount={searchresult.length} />
      {!!searchresult.length && <Sort callsort={callsort} sortstate={sortstate} />}
      {datatests.length > 0 ? (
        <Results datasites={datasites} datatests={sorteddata} resetvalue={resetvalue} />
      ) : (
        <Loader />
      )}
    </>
  );
};
