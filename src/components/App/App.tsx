import { FC, useCallback, useState } from 'react';

import Styles from './App.module.css';
import { endpoints } from '../../constants/endpoints';
import { fetchurl } from '../../constants/fetchurl';
import { useFetchData } from '../../hooks/useFetchData';
import { Site, Test } from '../../types/ApiTypes';
import { logging } from '../../utils/logging';
import { Dashboard } from '../Dashboard/Dashboard';

export type AppState = {
  sites: [] | Site[];
  tests: [] | Test[];
};

export const App: FC = (): JSX.Element => {
  const [getState, setState] = useState<AppState>({ sites: [], tests: [] });
  const CALLDATA = useCallback((point: string, data: Site[] | Test[]) => {
    if (point === endpoints.sites) {
      setState((prev) => {
        return {
          sites: data as Site[],
          tests: prev.tests,
        };
      });
    } else if (point === endpoints.tests) {
      setState((prev) => {
        return {
          sites: prev.sites,
          tests: data as Test[],
        };
      });
    }
  }, []);
  useFetchData(fetchurl.distant, endpoints.sites, CALLDATA);
  useFetchData(fetchurl.distant, endpoints.tests, CALLDATA);
  logging(getState);
  return (
    <div className={Styles.applayout}>
      <Dashboard datasites={getState.sites} datatests={getState.tests} />
    </div>
  );
};
