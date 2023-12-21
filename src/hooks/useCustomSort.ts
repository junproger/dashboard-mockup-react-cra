import { useCallback, useState } from 'react';

import { Test } from '../types/ApiTypes';
import { SortMap } from '../types/SortMap';

export const useCustomSort = (datatests: [] | Test[]) => {
  const initState = { sort: SortMap.id, desc: false };
  const [getSort, setSort] = useState<{ sort: SortMap; desc: boolean }>(initState);
  const callsort = useCallback((sort: SortMap) => {
    setSort((prev) => {
      if (prev.sort === sort) {
        return {
          sort: prev.sort,
          desc: !prev.desc,
        };
      }
      return {
        sort: sort,
        desc: false,
      };
    });
  }, []);
  const sortdata = datatests.sort(function (a, b) {
    const desc = getSort.desc;
    if (a[getSort.sort] === 'DRAFT') {
      return desc ? -1 : 1;
    }
    if (b[getSort.sort] === 'DRAFT') {
      return desc ? 1 : -1;
    }
    if (getSort.sort === SortMap.siteId && a[getSort.sort] === 1) {
      return desc ? -1 : 1;
    }
    if (getSort.sort === SortMap.siteId && b[getSort.sort] === 1) {
      return desc ? 1 : -1;
    }
    if (a[getSort.sort] > b[getSort.sort]) {
      return desc ? -1 : 1;
    }
    if (a[getSort.sort] < b[getSort.sort]) {
      return desc ? 1 : -1;
    }
    return 0;
  });
  return {
    callsort: callsort,
    sortdata: sortdata,
    sortstate: getSort,
  };
};
