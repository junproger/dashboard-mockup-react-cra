import { FC } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Styles from './App.module.css';
import { endpoints } from '../../constants/endpoints';
import { fetchurl } from '../../constants/fetchurl';
import { search } from '../../helpers/search';
import { SearchReturn, useCustomSearch } from '../../hooks/useCustomSearch';
import { SortReturn, useCustomSort } from '../../hooks/useCustomSort';
import { useDataState } from '../../hooks/useDataState';
import { useFetchData } from '../../hooks/useFetchData';
import { Site, Test } from '../../types/ApiTypes';
import { logging } from '../../utils/logging';
import { Dashboard } from '../Dashboard/Dashboard';
import { Nested } from '../Nested/Nested';

export const App: FC = (): JSX.Element => {
  const { getState, CALLDATA } = useDataState();
  useFetchData<Site[]>(fetchurl.distant, endpoints.sites, CALLDATA);
  useFetchData<Test[]>(fetchurl.distant, endpoints.tests, CALLDATA);
  const returnSearch: SearchReturn = useCustomSearch();
  const searchresult = search(getState.datatests, returnSearch.getValue);
  const returnSort: SortReturn = useCustomSort(searchresult);
  logging(getState);
  return (
    <div className={Styles.applayout}>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              datasites={getState.datasites}
              datatests={getState.datatests}
              searchreturn={returnSearch}
              searchresult={searchresult}
              sortreturn={returnSort}
            />
          }
        />
        <Route path="/finalize/:id" element={<Nested pgtitle="Finalize" />} />
        <Route path="/results/:id" element={<Nested pgtitle="Results" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
