import { useEffect } from 'react';

import { Site, Test } from '../types/ApiTypes';
import { logging } from '../utils/logging';

export const useFetchData = (
  fetchurl: string,
  endpoint: string,
  callback: (point: string, data: Site[] | Test[]) => void
) => {
  useEffect(() => {
    const FETCHING = async () => {
      const REQUEST = fetchurl + endpoint;
      try {
        const RESP = await fetch(REQUEST, { method: 'GET' });
        const DATA: Site[] | Test[] = await RESP.json();
        callback(endpoint, DATA);
      } catch (err) {
        logging(err);
        alert(err);
        throw err;
      }
    };
    FETCHING();
  }, [fetchurl, endpoint, callback]);
};
