import { useCallback, useState } from 'react';

import { endpoints } from '../constants/endpoints';
import { Site, Test } from '../types/ApiTypes';
import { DataProp } from '../types/DataProp';

export type DataStateReturn = {
  getState: DataProp;
  CALLDATA: (data: Site[] | Test[], point?: string) => void;
};

export const useDataState = (): DataStateReturn => {
  const [getState, setState] = useState<DataProp>({ datasites: [], datatests: [] });
  const CALLDATA = useCallback((data: Site[] | Test[], point?: string) => {
    if (point === endpoints.sites) {
      setState((prev) => {
        return {
          datasites: data as Site[],
          datatests: prev.datatests,
        };
      });
    } else if (point === endpoints.tests) {
      setState((prev) => {
        return {
          datasites: prev.datasites,
          datatests: data as Test[],
        };
      });
    }
  }, []);
  return {
    getState,
    CALLDATA,
  };
};
