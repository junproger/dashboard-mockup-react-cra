import { FC, useCallback, useState } from 'react';

import Styles from './Results.module.css';
import { DataProp } from '../../types/DataProp';
import { SortMap } from '../../types/SortMap';
import { Noresults } from '../Noresults/Noresults';
import { Row } from '../Row/Row';
import { Sort } from '../Sort/Sort';

export type ResultProp = DataProp & { resetvalue: () => void };

export const Results: FC<ResultProp> = ({ datasites, datatests, resetvalue }): JSX.Element => {
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
  return (
    <div className={Styles.results}>
      <Sort callsort={callsort} sortstate={getSort} />
      {datatests.length > 0 ? (
        datatests
          .sort(function (a, b) {
            const desc = getSort.desc;
            if (a[getSort.sort] > b[getSort.sort]) {
              return desc ? -1 : 1;
            }
            if (a[getSort.sort] < b[getSort.sort]) {
              return desc ? 1 : -1;
            }
            return 0;
          })
          .map((test) => {
            return (
              <Row
                key={test.id}
                testname={test.name}
                testtype={test.type}
                teststat={test.status}
                sitedata={datasites.find((site) => site.id === test.siteId)}
              />
            );
          })
      ) : (
        <Noresults resetvalue={resetvalue} />
      )}
    </div>
  );
};
