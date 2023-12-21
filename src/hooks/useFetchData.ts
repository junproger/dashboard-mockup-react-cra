import { useEffect } from 'react';

import { logging } from '../utils/logging';

export const useFetchData = <DT>(
  fetchurl: string,
  endpoint: string,
  callback: (data: DT, point?: string) => void
): void => {
  useEffect(() => {
    const FETCHING = async () => {
      const REQUEST = fetchurl + endpoint;
      try {
        const RESP = await fetch(REQUEST, { method: 'GET' });
        const DATA: DT = await RESP.json();
        callback(DATA, endpoint);
      } catch (err) {
        logging(err);
        alert(err);
        throw err;
      }
    };
    FETCHING();
  }, [fetchurl, endpoint, callback]);
};
